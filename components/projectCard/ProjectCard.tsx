import {
    Card
} from "@/components/ui/card";
import MediaComponent from "@/components/mediaComponent/MediaComponent";
import HyperText from "../magicui/hyper-text";
import { ProjectProps, URLList } from "@/types";
import ShinyButton from "../magicui/shiny-button";
import { FollowerPointerCard } from "../following-pointer/following-pointer";

export default function ProjectCard({
    className,
    project
}: {
    className?: string;
    project: ProjectProps;
}) {
    return (
        <FollowerPointerCard title={`[Check Out ${project.name}]` }>
        <Card className={className}>
            <div className="relative grid grid-cols-1 w-full ">
                <div className="">
                    <MediaComponent
                        src={project.media}
                        alt={project.name}
                        type={project.type}
                    />
                </div>
                <div className='p-3 flex flex-row justify-between item-center content-center w-full text-[1.5rem] font-bold'>
                    <div className="felx flex-col item-center content-center">
                        <HyperText text={project.name} />
                        <div className=" flex text-[0.9rem] font-normal justify-start ">{project.tags.join(",")}

                        </div>
                    </div>
                    <div className="text-[1rem] font-normal item-center content-center">{project.date}</div>
                </div>
                <div className='w-full p-2 '>
                    <p> {project.description}</p>

                </div>
                <div className='w-full flex flex-row justify-between cursor-none '>
                    {project.url.map((url:URLList)=>(
                        <a key={project.id} href={url.url} target="_blank" className="block w-full mx-1 cursor-none ">
                         <ShinyButton className='bg-slate-300 w-full' text={url.name} />
                         </a>
                    ))}
                   
                </div>

            </div>

        </Card>
        </FollowerPointerCard>
    );
};