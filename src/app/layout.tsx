import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/kanit"; // Defaults to weight 400
import "@fontsource/kanit/400.css"; // Specify weight
import "@fontsource/kanit/400-italic.css"; // Specify weight and style
import { ShowProvider } from "@/utils";
import Preload from "@/preload";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dtstock",
  description: "Test Dtstock app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preload>  
          <ShowProvider>
            {children}
          </ShowProvider>
        </Preload>
      </body>
    </html>
  );
}
