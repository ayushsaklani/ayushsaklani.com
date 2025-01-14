import React from "react";

import { CMS_ENDPOINT, extractProjectTags, ProjectTagProps } from "@/lib/utils";
import { ProjectProps } from "./masonicProjects";
import { CloudinaryProviderMetadata, UrlProps } from "@/types";
import dynamic from "next/dynamic";
const MasonicProject = dynamic(() => import('./masonicProjects'), {
  ssr: false,
})


export const revalidate = 60*15

interface ProjectData{
  id:number,
    cover:{
      provider_metadata: CloudinaryProviderMetadata
      mime:string,
      placeholder:string,
      width:number,
      height:number,
    },

    name:string,
    date:string,
    description:string,
    width:number,
    height:number,
    urls:Array<UrlProps>
    project_tags:Array<ProjectTagProps>

}



async  function Projects() {

  const data = await fetch(CMS_ENDPOINT+'/api/projects?populate=*&sort=createdAt:desc')
    let projects = await data.json()
    

    projects = (projects.data).map((project: ProjectData): ProjectProps => {
      const type = project.cover.mime.split('/')[0];
  
    
      return {
        id: project.id,
        src: project.cover.provider_metadata.public_id,
        name: project.name,
        date: project.date,
        description: project.description,
        type: type, // Reusing the extracted type
        width: project.cover.width || 0,
        height: project.cover.height || 0,
        urls: project.urls,
        tags: extractProjectTags(project.project_tags),
      };
    });

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
