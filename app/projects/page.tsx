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
      public_id: string,
      resource_type: string,
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
    tags:Array<ProjectTagProps>

}



async  function Projects() {     

  const data = await fetch(CMS_ENDPOINT+"", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Projects {
        projects(stage: PUBLISHED) {
          cover
          date
          description
          id
          name
          urls {
            id
            name
            src
          }
          tags {
            name
            id
            updatedAt
          }
        }
      }`,
    }),

  });
    let projects = await data.json()
    

    projects = (projects.data.projects).map((project: ProjectData): ProjectProps => {
      const type = project.cover.resource_type;
  
    
      return {
        id: project.id,
        src: project.cover.public_id,
        name: project.name,
        date: project.date,
        description: project.description,
        type: type, // Reusing the extracted type
        width: project.cover.width || 0,
        height: project.cover.height || 0,
        urls: project.urls,
        tags: extractProjectTags(project.tags),
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
