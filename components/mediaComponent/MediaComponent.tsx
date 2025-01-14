import React from 'react';
import { MediaComponentProps } from '@/types';

import { CldImage,CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';


const MediaComponent: React.FC<MediaComponentProps> = ({ type, src, alt ,width=500,height=500}) => {
  return (
    <div className="relative  z-[300] rounded-lg">
      {type === 'image' ? (
        <CldImage width={width} height={height} src={src} alt={alt}
      />
      ) : type === 'video' ? (
        <CldVideoPlayer
        width="1920"
        height="1080"
        muted
        loop
        playsinline
        autoplay
        controls={false}
        src={src}
      />
      
      ) : (
        <p>Invalid media type</p>
      )}
    </div>
  );
};

export default MediaComponent;