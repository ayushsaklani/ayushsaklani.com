"use client";
import React from "react";

import { ProjectList } from "@/data/projects";
import ProjectCard from "@/components/projectCard/ProjectCard";
import { ProjectProps } from "@/types";

export default async function ProjectPage() {

    //  const endpoint = "https://strapi.saklanicloud.com";
	

    // const data = await fetch(endpoint+'/api/projects?populate=*&sort=done_on:desc')
    // let projects = await data.json()
    // projects = projects.data
  // console.log(projects);
  return (
    <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-5 pt-10 mt-10 pb-[8rem]">
      {ProjectList.map((project:ProjectProps) => (
        <a href={project.url[0].url} target="_blank" className="">
         <ProjectCard key={project.id} className="w-full bg-slate-800 p-2 text-slate-300" project={project}/>
        </a>    
      ))}

    </div>
  );
}
