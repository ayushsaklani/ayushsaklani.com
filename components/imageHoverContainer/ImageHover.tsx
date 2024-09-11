import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imageList } from '@/data/imageHover';
import Link from 'next/link';
import { ImageHoverProps } from '@/types';
import { MouseContext } from '@/app/context/mouseContext';


const ImageHover: React.FC<ImageHoverProps> = ({src, srcSmall, alt }) => {
  const [isHovered, setisHovered] = useState(false);
  const [index, setIndex] = useState(0);
  const imageLen = imageList.length;

  const {cursorChangeHandler} = useContext(MouseContext);

  useEffect(() => {
    if (isHovered) {
      // Run your effect only when isHovered is true
      const intervalId = setInterval(() => {
        setIndex((prevIndx) => (prevIndx + 1) % imageLen);
      }, 300);
      // Cleanup the interval on unhover or component unmount
      return () => clearInterval(intervalId);

    }
    else {
      setIndex(0);
    }
    // No need for cleanup when isHovered is false, since the effect won't run in that case.
  }, [isHovered]);


  return (
    <motion.div

      onMouseEnter={() => { setisHovered(true); cursorChangeHandler("imageHover"); }}
      onMouseLeave={() => { setisHovered(false);cursorChangeHandler(""); }}

      onMouseDown={() => { setisHovered(false);cursorChangeHandler(""); }}
      onTouchStart={() => { setisHovered(true); }}
      onTouchEnd={() => { setisHovered(false); }}

      transition={{ duration: 1 }}
      variants={{
        initial: {
          opacity: 0,
          width: "var(--w-from)",
          height: "var(--h-from)",
        },
        animate: {
          opacity: 1,
          width: isHovered?"var(--w-hover)":"var(--w-to)",
          height: isHovered?"var(--h-hover)":"var(--h-to)",

        },
        hover: {
          width: "var(--w-hover)",
          height: "var(--h-hover)",
        }
      }}
      initial='initial'
      animate='animate'
      exit='initial'
      whileHover='hover'
      whileTap='hover'

      className="z-[150] relative flex justify-center items-center mx-auto my-auto  overflow-hidden
      [--w-from:30rem] [--h-from:30rem] sm:[--w-from:35rem] md:[--h-from:40rem] 
      [--w-to:20rem] [--h-to:21rem]   sm:[--w-to:25rem] md:[--h-to:27rem] 
      [--w-hover:32rem] sm:[--w-hover:32rem] md:[--w-hover:32rem] lg:[--w-hover:48rem] xl:[--w-hover:64rem]
      [--h-hover:15rem] sm:[--h-hover:18rem] md:[--h-hover:18rem] lg:[--h-hover:27rem] xl:[--h-hover:36rem]  
  "
    >
      {/* Main Image */}

      <img
        src={isHovered ? src : srcSmall}
        alt={alt}
        className='object-none block relative z-[150] w-full h-full'
      />
      {/* Centered Text [Projects] */}
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-[160] ">
          <span className="text-gray-200 text-3xl font-bold">[Projects]</span>
        </div>
      )}

      {/* Hover Image with AnimatePresence */}
      <AnimatePresence>
        {isHovered && (
          <Link href="/projects">
              
            <motion.div
              key="hoverImage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" absolute top-0 left-0 z-[200] w-full h-full"
            >
              <img
                src={`/images/works/${imageList[index]}`}
                alt={`Image ${imageList[index]}`}
                className="object-cover block w-full h-full"
              />
            </motion.div>
            
          </Link>
        )}


      </AnimatePresence>
    </motion.div>
  );
};

export default ImageHover;
