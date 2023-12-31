import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-screen flex flex-col justify-between ${inter.className}`}
      >
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
