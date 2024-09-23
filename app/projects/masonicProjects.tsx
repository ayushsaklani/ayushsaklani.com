'use client';
import ProjectCard from "@/components/projectCard/ProjectCard";
import { UrlProps } from "@/types";
import { Masonry } from "masonic";

export type ProjectProps = {
    id:number,
    src:string,
    name:string,
    date:string,
    description:string,
    type:string,
    width:number,
    height:number,
    urls: Array<UrlProps>,
    tags:Array<string>,
    placeholder:string,

}

interface MasonicsProjectprops {
    projects: ProjectProps[];
}

export default function MasonicProject({ projects }: MasonicsProjectprops) {
    return (
        <Masonry 
        items={projects} 
        render={MasonicProjectItem}
        columnWidth={450}
        columnGutter={10}
        maxColumnCount={3}
        
        />


    );
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MasonicProjectItem({ index, width, data }:{
    index:number,
    width:number,
    data:ProjectProps,
}) {

    return (
        <a key={index} href={data.urls[0].url} target="_blank" className="">
         <ProjectCard  className="w-full bg-slate-800 p-2 text-slate-300 border-slate-600 rounded-sm" project={data}/>
        </a>  
    );
}

