import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import Header from "@/components/custom/navBars/header";
import Footer from "@/components/custom/navBars/footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyansh Sahu",
  description: "Fullstack developer || Freelancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${nunito.className} select-none no-scrollbar`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}