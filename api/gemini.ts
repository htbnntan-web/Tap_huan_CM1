import { GoogleGenAI } from '@google/genai';

interface VercelRequest {
  method?: string;
  body?: {
    prompt?: string;
  } | string;
}

interface VercelResponse {
  status: (statusCode: number) => VercelResponse;
  json: (body: Record<string, unknown>) => void;
  setHeader: (name: string, value: string | string[]) => void;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
    return;
  }

  try {
    const parsedBody =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const prompt = parsedBody?.prompt;

    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
      res.status(400).json({ error: 'A valid "prompt" string is required in the request body.' });
      return;
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    res.status(200).json({
      text: response.text ?? '',
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to generate content from Gemini.';
    res.status(500).json({ error: message });
  }
}
