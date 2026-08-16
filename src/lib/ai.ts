// Tawf AI — a model-agnostic intelligence layer.
// The backing provider is abstracted behind a single `tawfAI` call so the model
// can be swapped without touching any component.

import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;

let _client: GoogleGenAI | null = null;

function client(): GoogleGenAI {
  if (!_client) {
    _client = new GoogleGenAI({ apiKey });
  }
  return _client;
}

export type AIResult = {
  text: string;
  error?: string;
};

export function isAIConfigured(): boolean {
  return Boolean(apiKey);
}

export async function tawfAI(systemPrompt: string, userMessage: string): Promise<AIResult> {
  if (!apiKey) {
    return {
      text: '',
      error: 'Tawf AI is not configured. Set GEMINI_API_KEY in your environment to enable it.',
    };
  }

  try {
    const response = await client().models.generateContent({
      model: 'gemini-2.0-flash',
      contents: userMessage,
      config: { systemInstruction: systemPrompt },
    });
    return { text: response.text ?? '' };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'An unknown error occurred';
    return { text: '', error: message };
  }
}