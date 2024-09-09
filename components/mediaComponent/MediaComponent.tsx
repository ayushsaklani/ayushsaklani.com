import React from 'react';
import BackgroundVideo from 'next-video/background-video';
import { MediaComponentProps } from '@/types';

const MediaComponent: React.FC<MediaComponentProps> = ({ type, src, alt }) => {
  return (
    <div className="z-50 rounded-lg">
      {type === 'image' ? (
        <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
      ) : type === 'video' ? (
        <BackgroundVideo src={src}></BackgroundVideo>
      ) : (
        <p>Invalid media type</p>
      )}
    </div>
  );
};

export default MediaComponent;