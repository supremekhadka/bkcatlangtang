//bkcatlangtang BKC At Langtang Bkc At Langtang bkc at langtang BKC AT LANGTANG

import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BKC At Langtang",
  description: "BKC At Langtang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
