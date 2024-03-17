import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/custom/navBars/header";
import "./globals.css";

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
      <body className={`${nunito.className} dark`}>
        <Header />
        <div className="flex items-center justify-center w-full h-screen">
          <div className="h-full w-full">
            {children}
          </ div>
        </div>
      </body>
    </html>
  );
}
