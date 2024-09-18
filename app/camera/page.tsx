
import React from "react";

import { CMS_ENDPOINT } from "@/lib/utils";
import { CameraImageProps } from "./masonicCamera";
import dynamic from "next/dynamic";

const MasonicCamera = dynamic(() => import('./masonicCamera'), {
  ssr: false,
})

export const revalidate = 3600*6;

interface ImageAttributes {
  id: number;
  url: string;
  name: string;
  mime: string;
  width: number;
  height: number;
  placeholder: string;
}

interface ImageData {
  attributes: ImageAttributes;
}


async function CameraImages() {

    const data = await fetch(CMS_ENDPOINT+'/api/photus?populate=*&sort=createdAt:desc')
    let images = await data.json()
    images = images.data[0].attributes.media.data 
    images = images.map((image:ImageData) :CameraImageProps =>({

      id:image.attributes.id,
      src:CMS_ENDPOINT+image.attributes.url,
      name:image.attributes.name,
      type:image.attributes.mime.split('/')[0],
      width:image.attributes.width,
      height:image.attributes.height,
      blur: image.attributes.placeholder,
    }));




  return (
    <div className="relative w-full px-5 pt-10 pb-[8rem] mt-10 mb-10">
     <MasonicCamera images={images} />
    </div>
  );
}

export default function CameraPage() {
  return (
        <CameraImages/>
  )
}

