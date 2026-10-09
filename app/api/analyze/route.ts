import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Server is missing the Gemini API key." },
        { status: 500 }
      );
    }

    const { prompt, imageBase64 } = await req.json();

    if (!imageBase64) {
      return NextResponse.json(
        { error: "No image was provided." },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: imageBase64,
              },
            },
          ],
        },
      ],
    });

    const text = response.text ?? "Sorry, I could not analyze this image.";

    return NextResponse.json({ result: text });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong on the server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}