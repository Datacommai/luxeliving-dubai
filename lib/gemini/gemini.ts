import { GoogleGenerativeAI } from '@google/generative-ai';
import {
 CACHED_PROPERTIES_KEY,
 DEFAULT_GEMINI_PROMPT,
 PROPERTY_PROMPT,
 SESSION_CHAT_HISTORY_KEY,
 SESSION_DOC_ID_KEY,
 SESSION_LOG_TIMER_KEY,
 userSessionId,
} from '../constants/contstants';
import { getProperties, storeChatbotLogs } from '../firebase/firebase';
import { PropertyType } from '@/types';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const generationConfig = {
 temperature: 1,
 top_p: 0.95,
 top_k: 40,
 max_output_tokens: 8192,
};

model.generationConfig = generationConfig;

const TWO_MINUTES = 2 * 60 * 1000;

const storeLogs = async (logs: string) => {
 // check if user started a new session
 if (!userSessionId) {
  return;
 }

 const sessionId = sessionStorage.getItem(SESSION_DOC_ID_KEY) || '';
 const lastLogTime = Number(sessionStorage.getItem(SESSION_LOG_TIMER_KEY)) || 0;

 const currentTime = Date.now();

 // check if it's been 2 minutes since the last log
 if (currentTime - lastLogTime < TWO_MINUTES) {
  return;
 }

 const docId = await storeChatbotLogs(logs, sessionId);

 sessionStorage.setItem(SESSION_DOC_ID_KEY, docId);
 sessionStorage.setItem(SESSION_LOG_TIMER_KEY, String(currentTime));
};

export const generateText = async (prompt: string) => {
 let properties;

 const cachedProperties = sessionStorage.getItem(CACHED_PROPERTIES_KEY);
 if (!cachedProperties) {
  properties = (await getProperties()) as PropertyType[];
  properties = JSON.stringify(properties);
  sessionStorage.setItem(CACHED_PROPERTIES_KEY, properties);
 } else {
  properties = cachedProperties;
 }

 const messageLogs: string[] = JSON.parse(
  sessionStorage.getItem(SESSION_CHAT_HISTORY_KEY) || '[]'
 );

 const combinedPrompt =
  DEFAULT_GEMINI_PROMPT +
  ' ' +
  PROPERTY_PROMPT +
  ' There are available properties in this JSON object: ' +
  properties;

 try {
  const result = await model.generateContent({
   systemInstruction: combinedPrompt,
   contents: [
    ...messageLogs.map((msg) => ({ role: 'user', parts: [{ text: msg }] })),
    { role: 'user', parts: [{ text: prompt }] },
   ],
  });

  const generatedText = result.response.text();

  messageLogs.push(prompt, generatedText);
  sessionStorage.setItem(SESSION_CHAT_HISTORY_KEY, JSON.stringify(messageLogs));

  await storeLogs(JSON.stringify(messageLogs));

  return generatedText;
 } catch (error) {
  console.error('Error generating text:', error);
  return '';
 }
};
