import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/custom/navBars/header";
import "./globals.css";
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
    <html lang="en">
      <head />
      <body className={`${nunito.className} dark select-none`}>
        <Header />
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="h-full w-full">
            {children}
          </ div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
