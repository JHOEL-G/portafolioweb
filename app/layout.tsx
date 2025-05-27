import type { Metadata } from "next";
import { Urbanist } from "next/font/google"; 
import { Roboto_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist", 
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",                              
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Mi Portafolio Profesional", 
  description: "Explora mis proyectos y habilidades en desarrollo web y diseño.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${urbanist.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}