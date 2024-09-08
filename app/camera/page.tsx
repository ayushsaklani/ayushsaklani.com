"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/WobbleCard";
import MediaComponent from "@/components/mediaComponent/MediaComponent";


export default async function CameraPage() {

     const endpoint = "https://strapi.saklanicloud.com";
	

    let data = await fetch(endpoint+'/api/photu?populate=*&sort=createdAt:desc')
    let images = await data.json()
    images = images.data.attributes.images.data 
    console.log(images)
  return (
    <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      {images.map((image) => (
      
    <div className="relative grid grid-cols-1 w-full">
        <div className="pointer-events-none z-100">
            <MediaComponent 
            src={endpoint + image.attributes.url} 
            alt={image.attributes.name}
            type={image.attributes.mime.split('/')[0]} 
             />
        </div>
    </div>
       
      
      ))}

    </div>
  );
}
