import { GoogleGenerativeAI } from '@google/generative-ai';

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
 const result = await model.generateContent({
  systemInstruction: `
   You are an AI assistant that provides helpful, concise, and accurate answers.
   Keep responses friendly, informative, and to the point.
   `,
  contents: [{ role: 'user', parts: [{ text: prompt }] }],
 });
 const generatedText = result.response.text();

 return generatedText;
};
