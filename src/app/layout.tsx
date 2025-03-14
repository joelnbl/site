import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Joel Bello - Full Stack Developer con más de 5 años de experiencia",
  description: "Full Stack Developer con más de 5 años de experiencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
        <div className="min-h-screen flex flex-col justify-between pt-0 mt-8 md:pt-8 p-8">
          <main
            className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[60ch] mx-auto w-full space-y-6`}
          >
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}