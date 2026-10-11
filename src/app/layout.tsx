import "./globals.css";
import "@fontsource-variable/google-sans-flex";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HackHeist 2026 — GDG on Campus MIET",
  description: "Learn, build, and connect at HackHeist by GDG on Campus MIET.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
