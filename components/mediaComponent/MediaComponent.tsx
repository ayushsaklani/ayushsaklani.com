import React from 'react';
import BackgroundVideo from 'next-video/background-video';
import { MediaComponentProps } from '@/types';
import Image from 'next/image';

const MediaComponent: React.FC<MediaComponentProps> = ({ type, src, alt ,width=500,height=500,blur=''}) => {
  return (
    <div className="relative  z-[300] rounded-lg">
      {type === 'image' ? (
        <Image width={width} height={height} src={src} alt={alt} placeholder='blur' blurDataURL={blur} />
      ) : type === 'video' ? (
       
        <BackgroundVideo src={src}></BackgroundVideo>
  
      ) : (
        <p>Invalid media type</p>
      )}
    </div>
  );
};

export default MediaComponent;