import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/custom/navBars/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cerashatam",
  description: "Celebrating 100 years of Ceramic Engineering IIT-BHU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex items-center justify-center w-full h-screen">
            <div className="h-full w-full">
              {children}
            </ div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
