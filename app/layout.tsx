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

export const metadata: Metadata = {
  title: "ayushsaklani.com",
  description: "Personal Portfolio Ayush Saklani",
};


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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen max-h-[calc(100dvh)] max-w-[calc(100dwh)] mx-auto bg-slate-900 `}
      >
        <div  className="realtive h-full w-full max-w-[2000px] mx-auto ">

            {children}
          <div className="fixed bottom-8  flex items-center justify-center mx-auto w-full z-[1000]">
             <FloatingDock
              mobileClassName="" // only for demo, remove for production
              items={links}
            />
          </div>
        </div>
      </body>
    </html>
  );
}