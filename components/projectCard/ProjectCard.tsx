import {
    Card
} from "@/components/ui/card";
import MediaComponent from "@/components/mediaComponent/MediaComponent";
import HyperText from "../magicui/hyper-text";
import ShinyButton from "../magicui/shiny-button";
import { MouseContext } from "@/app/context/mouseContext";
import { useContext } from "react";
import { UrlProps } from "@/types";
import { ProjectProps } from "@/app/projects/masonicProjects";

export default function ProjectCard({
    className,
    project
}: {
    className?: string;
    project: ProjectProps;
}) {
    const { cursorChangeHandler } = useContext(MouseContext);
    return (

        <Card className={className}
            onMouseMove={() => { cursorChangeHandler('imageHover') }}
            onMouseLeave={() => { cursorChangeHandler('') }}
        >
            <div className="relative grid grid-cols-1 w-full z-[500] rounded-none">
                <div className="">
                    <MediaComponent
                        src={project.src}
                        alt={project.name}
                        type={project.type}
                        width={project.width}
                        height={project.height}
                    />
                </div>
                <div className='p-3 flex flex-row flex-wrap justify-between item-center content-center w-full text-[0.7rem] font-bold'>
                    <div className="relative flex flex-col flex-wrap ">
                        <div className=" text-[1.1rem] md:text-[1.3rem]"> <HyperText text={project.name} /></div>
                    </div>


                    <div className=" w-full text-[1rem] font-normal flex justify-end">{project.date}</div>
                </div>

                <div className="px-3 flex flex-row flex-wrap text-[0.9rem] font-normal justify-start">
                    {
                        project.tags.map((tag: string) => (
                            <span className="flex justify-center items-center content-center border px-[0.25rem] block mr-1 mt-2 rounded-sm border-slate-500" key={tag}>
                                {tag}
                            </span>
                        ))
                    }
                </div>

                <div className='w-full p-2 '>
                    <p> {project.description}</p>

                </div>
                <div
                    onMouseMove={(e) => { e.stopPropagation(); cursorChangeHandler('anchorHover') }}
                    onMouseLeave={(e) => { e.stopPropagation(); cursorChangeHandler('') }}
                    className='w-full flex flex-row justify-between cursor-none z-[1000]'>
                    {project.urls.map((url: UrlProps) => (
                        <a key={project.id} href={url.url} target="_blank" className="block w-full mx-1 cursor-none ">
                            <ShinyButton className='bg-slate-300 w-full' text={url.name} />
                        </a>
                    ))}

                </div>

            </div>

        </Card>

    );
};