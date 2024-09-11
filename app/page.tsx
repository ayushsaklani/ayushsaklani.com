'use client';
import { HomePage } from "@/components/home/HomePage";
import NameLoading from "@/components/loading/NameLoading";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
    {
      isLoading? <NameLoading setIsLoading={setIsLoading} />:<HomePage/>
    } 
    </> 
);
}
