"use client";

import { motion } from "framer-motion";
import React from "react";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import ImageHover from "../imageHoverContainer/ImageHover";

export function HomePage() {
  return (
<div className='relative flex w-full h-full'>
<div className="relative w-full  m-10 mb-[16rem] 
                bg-green-100 ">
    <div className="absolute  z-[150] pointer-events-auto 
                  bg-green-100 w-full h-full
                  flex justify-center content-center
                  ">
      <ImageHover src='' type='' alt='' />
    </div>
</div>
  <div className="absolute grid grid-cols-1 md:grid-cols-2  pointer-events-none 
    bottom-[1rem] md:bottom-[7rem] lg:bottom-[9rem]
    left-[1rem] md:left-[2rem] z-10
 ">
 <GradualSpacing
      className="realtive font-display text-left  
      text-[8rem] md:text-[14rem]
      mb-[-6rem] md:mb-[0rem]
      font-bold tracking-[-0.1em] text-gray-300  md:leading-[5rem] z-[11]"
      text="Ayush"
  />

  <GradualSpacing
      className="realtive font-display text-left
      text-[8rem] md:text-[14rem]
      ml-[0rem] md:ml-[-1rem]
      font-bold tracking-[-0.1em] text-gray-300  md:leading-[5rem] z-[10]"
      text="Saklani"
  />
  </div>
  <BackgroundBeams className="w-full h-full z-0"/>
</div>
  );
}
