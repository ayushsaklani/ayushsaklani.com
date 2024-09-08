"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/WobbleCard";
import MediaComponent from "@/components/mediaComponent/MediaComponent";


export default async function ProjectPage() {

     const endpoint = "https://strapi.saklanicloud.com";
	

    let data = await fetch(endpoint+'/api/projects?populate=*&sort=done_on:desc')
    let projects = await data.json()
    projects = projects.data
  console.log(projects);
  return (
    <div className="relative w-full grid grid-cols-1 gap-5 p-5">
      {projects.map((project) => (
        <WobbleCard
        containerClassName=" text-zinc-200"
        className=""
      >
    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="">
            <MediaComponent 
            src={ endpoint + project.attributes.cover.data.attributes.url} 
            alt={project.attributes.name}
            type={project.attributes.cover.data.attributes.mime.split('/')[0]} 
             />
        </div>
        <div className='p-3'>
            <h2>{project.attributes.name}</h2>
        </div>
    </div>
       
        </WobbleCard>
      
      ))}

    </div>
  );
}
