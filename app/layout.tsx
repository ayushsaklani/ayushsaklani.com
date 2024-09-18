import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingDock } from "@/components/ui/FloatingDock";
import {
  IconBrandGithub,
  IconHome,
  IconBulb,
  IconCamera,
  IconBrandLinkedin,
  IconFileCv,

} from "@tabler/icons-react";

import MouseContextProvider from "./context/mouseContext";
import CustomCursor from "@/components/cursor/CustomCursor";
import { GoogleAnalytics } from '@next/third-parties/google';





const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const stadioSans = localFont({
  src: "./fonts/Stadio-Now.ttf",
  variable: "--font-stadio",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Ayush Saklani",
  description: "Personal Portfolio of Ayush Saklani",
};


const GTAG = process.env.GAID || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
      target: "",
    }, 
    { 
      title: "Projects",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
      target: "",
    }, 
    { 
      title: "Camera",
      icon: (
        <IconCamera className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/camera",
      target: "",
    }, 
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ayushsaklani",
      target: "_blank",
    },
    { 
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ayushsaklani",
      target: "_blank",
    }, 
    { 
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://resume.saklanicloud.com/dyumat/m-l-resume-ayush-saklani",
      target: "_blank",
    }, 
  ];
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${stadioSans.variable}
      antialiased h-screen w-screen max-h-[calc(100dvh)] max-w-[calc(100dwh)] mx-auto bg-slate-900 text-slate-200`}
      >
        <MouseContextProvider>
        <CustomCursor/>
        <div className="relative h-full w-full mx-auto overflow-x-hidden">
  {children}
  
  <div className="fixed bottom-8 flex items-center justify-center mx-auto w-full z-[1000]">
    <FloatingDock items={links} />
  </div>
</div>

        </MouseContextProvider>
        <GoogleAnalytics gaId={GTAG}/>
      </body>
    </html>
  );
}
