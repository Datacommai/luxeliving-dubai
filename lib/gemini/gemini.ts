import { GoogleGenerativeAI } from '@google/generative-ai';
import { DEFAULT_GEMINI_PROMPT } from '../constants/contstants';

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

export const generateText = async (prompt: string) => {
 try {
  const result = await model.generateContent({
   systemInstruction: DEFAULT_GEMINI_PROMPT,
   contents: [{ role: 'user', parts: [{ text: prompt }] }],
  });
  const generatedText = result.response.text();

  return generatedText;
 } catch (error) {
  console.error('Error generating text:', error);
  return '';
 }
};
