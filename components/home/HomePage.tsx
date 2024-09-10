"use client";
import React,{useState,useEffect} from "react";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import ImageHover from "@/components/imageHoverContainer/ImageHover";
import RealTimeClock from "@/components/clock/RealTimeClock";


export function HomePage() {

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {

    setWindowWidth(window.innerHeight);
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
<div className='relative flex w-full h-full'>
<div className="relative w-full  m-10 mb-[16rem] 
                ">
    <div className="absolute  z-[150] pointer-events-auto 
                   w-full h-full
                  flex justify-center content-center
                  ">
      <ImageHover src='/images/me.jpg' srcSmall="/images/me_small.jpg"  alt='photo' />
    </div>
</div>
  <div className="absolute grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pointer-events-none 
    bottom-[2rem] md:bottom-[7rem] lg:bottom-[9rem]
    left-[1rem] md:left-[2rem] z-10
 ">
 <GradualSpacing
      className="realtive font-display text-left  
      text-[7.5rem]  lg:text-[13rem] 
      mb-[-6rem] md:mb-[0rem]
      font-bold tracking-[ -0.1em] text-gray-300  md:leading-[5rem] z-[11]"
      text="Ayush"
  />

  <GradualSpacing
      className="realtive font-display text-left
      text-[7.5rem]  lg:text-[13rem]
      ml-[0rem] md:ml-[-1rem]
      font-bold tracking-[-0.1em] text-gray-300  md:leading-[5rem] z-[10]"
      text="Saklani"
  />
  

 
  </div>
   {/* WxH */}
   <div className="absolute bottom-8 left-8 z-[250] text-[1rem]">
    {windowWidth+"X"+ windowHeight}
  </div>
  {/* Time  */}
  <div className="absolute top-8 left-8 z-[250] text-[1rem]">
    <RealTimeClock/>
  </div>
  <BackgroundBeams className="w-full h-full z-0"/>
</div>
  );
}
