'use client';
import MediaComponent from "@/components/mediaComponent/MediaComponent";
import { Masonry } from "masonic";

export type CameraImageProps = {
    id:number,
    src:string,
    name:string,
    type:string,
    width:number,
    height:number

}
interface MasonicCameraProps {
    images: CameraImageProps[]; // Expect images as an array
  }
  

export default function MasonicCamera({ images }: MasonicCameraProps){
    return (
        <Masonry
            items={images}
            render={MasonicCameraItems}
            columnWidth={350}
            columnGutter={10}
            maxColumnCount={5}

        />


    );
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MasonicCameraItems({ index, width, data }:{
    index:number,
    width:number,
    data:CameraImageProps,
}) {

    return (
        <div key={index} className="relative grid grid-cols-1 w-full">
            <div className="pointer-events-none z-100">
                <MediaComponent
                    src={ data.src}
                    alt={data.name}
                    type={data.type}
                    width={data.width}
                    height={data.height}
                />
            </div>
        </div>
    );
}

