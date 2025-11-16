import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";


export const CMS_ENDPOINT  = process.env.CMS_ENDPOINT;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ProjectTagProps =  {
  id:string,
  name:string,
  updatedAt:string,
}

export function extractProjectTags(projectTags:Array<ProjectTagProps>){

  return projectTags.map((projectTag)=>projectTag.name);

}
