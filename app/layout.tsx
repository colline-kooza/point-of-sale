import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/Providers";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Point of sale",
  description: "Generated collinz Dev",
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased relative",
        fontSans.variable
      )}
    >
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Header/>
      {children}
      <Footer/>
      </ThemeProvider>
    </body>
  </html>
  );
}
