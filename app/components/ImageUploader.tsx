"use client";

import { useState, useRef } from "react";

export default function ImageUploader({
  onImageReady,
}: {
  onImageReady: (base64: string) => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setPreview(dataUrl);
      // Strip the "data:image/...;base64," prefix
      const base64 = dataUrl.split(",")[1];
      onImageReady(base64);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="w-full">
      {/* Drop Zone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
        style={{
          border: isDragging ? "2px dashed #2e7d32" : "2px dashed #9e9e9e",
          backgroundColor: isDragging ? "#f1f8e9" : "transparent",
          borderRadius: "10px",
          padding: "30px",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "#666", fontSize: "15px" }}>
          📸 Click or drag & drop a photo of your plant here
        </p>
        <p style={{ color: "#999", fontSize: "12px", marginTop: "5px" }}>
          JPG, PNG supported
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />
      </div>

      {/* Image Preview */}
      {preview && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={preview}
            alt="Your plant"
            style={{
              maxWidth: "100%",
              maxHeight: "350px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      )}
    </div>
  );
}