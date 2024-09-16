import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";


export const CMS_ENDPOINT  = process.env.CMS_ENDPOINT;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ProjectTagProps =  {
id:string,
attributes:{
  tag:string,
  createdAt:string,
  updatedAt:string,
  publishedAt:string
}
}

export function extractProjectTags(projectTags:Array<ProjectTagProps>){

  return projectTags.map((projectTag)=>projectTag.attributes.tag);

}
