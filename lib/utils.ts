import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";


export const CMS_ENDPOINT  = process.env.CMS_ENDPOINT;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ProjectTagProps =  {
id:string,
  tag:string,
  createdAt:string,
  updatedAt:string,
  publishedAt:string
}

export function extractProjectTags(projectTags:Array<ProjectTagProps>){

  return projectTags.map((projectTag)=>projectTag.tag);

}
