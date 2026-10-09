import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plant Care Companion",
  description: "Your personal AI-powered gardening assistant. Identify plants, detect diseases, and get care advice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}