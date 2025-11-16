
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
  media: CloudinaryProviderMetadata
}

async function CameraImages() {

    const data = await fetch(CMS_ENDPOINT+'', {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query ImageGallery {
            imageGallery(where: {id: "cmi291k8erauz0dn2nrrdd4lz"}, stage: PUBLISHED) {
              gallery {
              id
              media
              }
            }
          }`,
        }),

    });
    let images = await data.json();
    images = images.data.imageGallery.gallery;
    
    images = images.map((image:ImageData) :CameraImageProps =>({

      id:image.id,
      src:image.media.public_id,
      name:image.media.name,
      type:image.media.resource_type,
      width:image.media.width,
      height:image.media.height,
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

