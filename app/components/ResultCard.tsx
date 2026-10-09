"use client";

export default function ResultCard({ content }: { content: string }) {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "24px",
        borderRadius: "10px",
        border: "1px solid #e0e0e0",
        marginTop: "20px",
        lineHeight: "1.7",
        fontSize: "15px",
        color: "#333",
        textAlign: "left",
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}