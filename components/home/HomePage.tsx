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
<div className='relative flex w-full h-full  mx-auto'>
<div className="relative w-full  mx-auto  m-10 mb-[16rem] 
                ">
    <div className="absolute  z-[150] pointer-events-auto 
                   w-full h-full
                  flex justify-center content-center
                  ">
      <ImageHover src='/images/me.jpg' srcSmall="/images/me_small.jpg"  alt='photo' />
    </div>


</div>
<div className="absolute  mx-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pointer-events-none 
    bottom-[2rem] md:bottom-[6rem] lg:bottom-[10rem]
    left-[1rem] md:left-[2rem] xl:left-[5rem]  z-10
   font-stadio
    ">
 <GradualSpacing
      className="realtive font-display text-left  
      text-[7.5rem]  lg:text-[13.5rem] 
      mb-[-6rem] md:mb-[0rem]
      font-bold tracking-[-0.1em] text-gray-300  md:leading-[5rem] z-[11]"
      text="Ayush"
  />

  <GradualSpacing
      className="realtive font-display text-left
      text-[7.5rem]  lg:text-[13.5rem]
      ml-[0rem] md:ml-[1rem]
      font-bold tracking-[-0.1em] text-gray-300  md:leading-[5rem] z-[10]"
      text="Saklani"
  />
  

 
  </div>
   {/* WxH */}
   <div className="absolute invisible sm:visible  bottom-5 left-5 z-[250] text-[1rem]">
    {windowWidth+"x"+ windowHeight}
  </div>
  {/* Time  */}
  <div className="absolute top-5 left-5 z-[250] text-[1rem]">
    <RealTimeClock/>
  </div>
  <BackgroundBeams className="w-full h-full z-0"/>
</div>
  );
}
