
import React from "react";

import { CMS_ENDPOINT } from "@/lib/utils";
import { CameraImageProps } from "./masonicCamera";
import dynamic from "next/dynamic";

const MasonicCamera = dynamic(() => import('./masonicCamera'), {
  ssr: false,
})

export const revalidate = 3600*6;

interface ImageData {
  id: string,
  public_id:string;
  resource_type: string;
  name: string;
  width: number;
  height: number;
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
              media
              }
            }
          }`,
        }),

    });
    let images = await data.json();
    images = images.data.imageGallery.gallery[0].media;
    
    images = images.map((image:ImageData) :CameraImageProps =>({
      id:image.id,
      src:image.public_id,
      name:image.name,
      type:image.resource_type,
      width:image.width,
      height:image.height,
    }));




  return (
    <div className="relative w-full px-5 pt-10 pb-[8rem] mt-10 mb-10">
     <MasonicCamera images={images} />
     {/* <p>{JSON.stringify(images)}</p> */}
    </div>
  );
}

export default function CameraPage() {
  return (
        <CameraImages/>
  )
}

