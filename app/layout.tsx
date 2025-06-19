// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rate Startup Ideas",
  description: "AI-powered Rating Ideas for Startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={GeistSans.className}>
          {children}
      </body>
    </html>
  );
}

