import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/custom/navBars/header";
import Footer from "@/components/custom/navBars/footer";
import ParticleBg from "@/components/particles/particleBg";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyansh Sahu",
  description: "Fullstack developer || Freelancer",
};
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${nunito.className} select-none no-scrollbar`}>
        <div className="bg-[#192289] absolute top-[-2rem] left-[-2rem] -z-10 h-3/4 w-3/5 rounded-full blur-[8rem]"></div>
        <div className="bg-[#a10505] absolute top-[6rem] right-0 -z-10 h-2/3 w-1/2 rounded-full blur-[10rem]"></div>
        <div className="bg-[#000000] absolute bottom-[0rem] -z-50 h-screen w-screen"></div>
        <ParticleBg />
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
