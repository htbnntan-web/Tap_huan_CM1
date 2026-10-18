export interface GeminiGenerateResponse {
  text: string;
}

export interface GeminiErrorResponse {
  error?: string;
}

/**
 * Calls the Vercel Serverless Function at `/api/gemini` to generate text
 * using the server-side Gemini API.
 */
export async function generateGeminiContent(prompt: string): Promise<string> {
  if (!prompt || !prompt.trim()) {
    throw new Error('Prompt cannot be empty.');
  }

  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  const data = (await response.json()) as GeminiGenerateResponse & GeminiErrorResponse;

  if (!response.ok) {
    throw new Error(data.error || `Request failed with status ${response.status}`);
  }

  return data.text ?? '';
}

export default {
  generateGeminiContent,
};
