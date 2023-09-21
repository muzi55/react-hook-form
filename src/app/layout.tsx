import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리액트훅폼 공부",
  description: "React-hook-form 공부",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
