import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { ourFileRouter } from './api/uploadthing/core'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { cn } from "@/lib/utils"
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/Providers";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import AuthProvider from "@/context/page";


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
        "min-h-screen bg-background font-sans antialiased relative ",
        GeistSans.className
      )}
    >
     <AuthProvider>
     <Toaster />
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Header/>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}
        />
      {children}
      <Footer/>
      </ThemeProvider>
      </AuthProvider>

    </body>
  </html>
  );
}
