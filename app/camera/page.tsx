
import React from "react";

import { CMS_ENDPOINT } from "@/lib/utils";
import { CameraImageProps } from "./masonicCamera";
import dynamic from "next/dynamic";
import { CloudinaryProviderMetadata } from "@/types";

const MasonicCamera = dynamic(() => import('./masonicCamera'), {
  ssr: false,
})

export const revalidate = 3600*6;

interface ImageData {
  id: number;
  url: string;
  name: string;
  mime: string;
  width: number;
  height: number;
  provider_metadata: CloudinaryProviderMetadata
}

async function CameraImages() {

    const data = await fetch(CMS_ENDPOINT+'/api/photus?populate=*&sort=createdAt:desc')
    let images = await data.json()
    images = images.data[0].media 
    images = images.map((image:ImageData) :CameraImageProps =>({

      id:image.id,
      src:image.provider_metadata.public_id,
      name:image.name,
      type:image.mime.split('/')[0],
      width:image.width,
      height:image.height,

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

