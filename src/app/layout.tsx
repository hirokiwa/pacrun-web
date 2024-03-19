import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'pacrun',
  description: 'たくさん走って、たくさん汗かいて、よりハイスコアを目指せ！！',
  openGraph: {
    title: 'pacrun',
    images: ['https://github.com/hirokiwa/ai-blog-client/assets/89170014/792d6621-f036-4c7d-90d9-1cb4c1915817'],
    description: 'たくさん走って、たくさん汗かいて、よりハイスコアを目指せ！！',
    siteName: 'pacrun',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://github.com/hirokiwa/ai-blog-client/assets/89170014/792d6621-f036-4c7d-90d9-1cb4c1915817'],
    title: 'pacrun',
    description: 'たくさん走って、たくさん汗かいて、よりハイスコアを目指せ！！',
    creator: 'hiroki_int',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
