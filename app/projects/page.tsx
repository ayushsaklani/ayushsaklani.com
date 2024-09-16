import React from "react";

import { CMS_ENDPOINT, extractProjectTags, ProjectTagProps } from "@/lib/utils";
import { ProjectProps } from "./masonicProjects";
import { UrlProps } from "@/types";
import dynamic from "next/dynamic";
const MasonicProject = dynamic(() => import('./masonicProjects'), {
  ssr: false,
})


export const revalidate = 60*15

interface ProjectAttributes{
    cover:{
      data:{
        attributes:{
          url:string,
          mime:string,
        }
      }
    },

    name:string,
    date:string,
    description:string,
    width:number,
    height:number,
    urls:Array<UrlProps>
    project_tags:{
      data:Array<ProjectTagProps>}

}

interface ProjectData{
  id:number,
  attributes:ProjectAttributes;
}

async  function Projects() {

  const data = await fetch(CMS_ENDPOINT+'/api/projects?populate=*&sort=createdAt:desc')
    let projects = await data.json()
    

    projects = (projects.data).map((project:ProjectData): ProjectProps=>({
      id:project.id,
      src:CMS_ENDPOINT+project.attributes.cover.data.attributes.url,
      name:project.attributes.name,
      date:project.attributes.date,
      description:project.attributes.description,
      type:project.attributes.cover.data.attributes.mime.split('/')[0],
      width:project.attributes.width|0,
      height:project.attributes.height|0,
      urls:project.attributes.urls,
      tags:extractProjectTags(project.attributes.project_tags.data)
    }));

  return (
    <div className="relative w-full px-5 pt-10 mt-10 pb-[8rem] ">
      <MasonicProject projects={projects}/>
     
    </div>
  );
}

export default function ProjectPage(){
  return (
    <Projects/>
  );
}
