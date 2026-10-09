"use client";

import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ResultCard from "./components/ResultCard";

export default function Home() {
  const [imageBase64, setImageBase64] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function analyzeImage(mode: "identify" | "disease") {
    if (!imageBase64) {
      alert("Please upload a photo first.");
      return;
    }

    setLoading(true);
    setResult("");

    const prompts: Record<string, string> = {
      identify:
        "You are a friendly, expert botanist. Look at this photo and tell me the name of the plant (both common name and scientific name). Give a brief 2-3 sentence description of what makes this plant unique or interesting. Keep it warm and conversational, like a knowledgeable friend. Format using simple HTML (<b> for names, <br> for line breaks).",
      disease:
        "You are an experienced gardener who has been growing plants for 30 years. Look closely at this plant photo. Do you see any signs of pests, overwatering, underwatering, nutrient deficiency, sunburn, or disease? Tell me exactly what might be wrong in plain, beginner-friendly language. Then give me a practical 3-step action plan to fix it. Be direct but kind. Format cleanly using HTML (<b> for emphasis, <ul><li> for steps, <br> for spacing).",
    };

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompts[mode],
          imageBase64: imageBase64,
        }),
      });

      const data = await res.json();

      if (data.error) {
        setResult(`<p style="color:#c62828;">⚠️ ${data.error}</p>`);
      } else if (data.result) {
        setResult(data.result);
      } else {
        setResult(
          "<p>Sorry, I couldn't understand that photo. Try a clearer one.</p>"
        );
      }
    } catch {
      setResult(
        "<p style='color:#c62828;'>Connection error. Please try again.</p>"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 20px",
        backgroundColor: "#fcfcfc",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "620px",
          width: "100%",
          padding: "35px",
          borderRadius: "14px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
          border: "1px solid #e0e0e0",
        }}
      >
        {/* Header */}
        <h1
          style={{
            color: "#1b5e20",
            fontSize: "28px",
            textAlign: "center",
            marginBottom: "6px",
            fontWeight: 700,
          }}
        >
          🌿 Plant Care Companion
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: "15px",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          Upload a photo of your plant, and let&apos;s find out how to keep it
          healthy and thriving.
        </p>

        {/* Image Uploader Component */}
        <ImageUploader onImageReady={(b64) => setImageBase64(b64)} />

        {/* Action Buttons */}
        <button
          onClick={() => analyzeImage("identify")}
          disabled={!imageBase64 || loading}
          style={{
            width: "100%",
            padding: "13px",
            fontSize: "16px",
            fontWeight: 600,
            color: "white",
            backgroundColor:
              !imageBase64 || loading ? "#9e9e9e" : "#2e7d32",
            border: "none",
            borderRadius: "8px",
            cursor: !imageBase64 || loading ? "not-allowed" : "pointer",
            marginBottom: "12px",
            transition: "background 0.3s",
          }}
        >
          🌱 Identify this Plant
        </button>

        <button
          onClick={() => analyzeImage("disease")}
          disabled={!imageBase64 || loading}
          style={{
            width: "100%",
            padding: "13px",
            fontSize: "16px",
            fontWeight: 600,
            color: "white",
            backgroundColor:
              !imageBase64 || loading ? "#9e9e9e" : "#2e7d32",
            border: "none",
            borderRadius: "8px",
            cursor: !imageBase64 || loading ? "not-allowed" : "pointer",
            marginBottom: "12px",
            transition: "background 0.3s",
          }}
        >
          🩺 Check Health & Diseases
        </button>

        {/* Loading Spinner */}
        {loading && (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div
              style={{
                display: "inline-block",
                width: "32px",
                height: "32px",
                border: "4px solid #f3f3f3",
                borderTop: "4px solid #2e7d32",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
            <p style={{ color: "#666", marginTop: "10px", fontSize: "14px" }}>
              Taking a close look at your plant...
            </p>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Results */}
        {result && <ResultCard content={result} />}
      </div>

      {/* Footer */}
      <p
        style={{
          marginTop: "30px",
          fontSize: "12px",
          color: "#888",
          textAlign: "center",
        }}
      >
        Built for Hacktoberfest 2026 🌱 | Open Source AI Challenge
      </p>
    </main>
  );
}