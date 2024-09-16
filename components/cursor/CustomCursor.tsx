'use client';
import { useContext } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import { MouseContext } from "@/app/context/mouseContext";
import { motion } from 'framer-motion';
import ArrowUp from '@/svg/ArrowUp.svg';

const CustomCursor = () => {

    const { x, y } = useMousePosition();
    const { cursorType } = useContext(MouseContext);

    const borderColor = 'border-yellow-300';
    const baseClasses = `
      fixed 
      w-[4rem] 
      h-[4rem] 
      border-2 
      ${borderColor} 
      rounded-full 
      translate-x-[-50%] 
      translate-y-[-50%] 
      z-[2000] 
      pointer-events-none 
      inset-0
      invisible
      md:visible
    `;

    // Conditionally add the duration class
    const durationClass = cursorType === '' ? 'duration-100 ease-out' : '';


    return (
        <>

            {/* Dot */}
            <motion.div
                style={{ left: `${x}px`, top: `${y}px` }}
                className="fixed 
                w-[1rem] h-[1rem] bg-yellow-300 rounded-full translate-x-[-50%] translate-y-[-50%] z-[2000] pointer-events-none inset-0
                invisible md:visible"
                animate={getDotAnimation(cursorType)}
                transition={{
                    duration: 0.5
                }}

            >
                <CursorsComponent status={cursorType} />
            </motion.div>


            {/* Ring */}

            <motion.div
                style={{ left: `${x}px`, top: `${y}px` }}
                className={`${baseClasses} ${durationClass}`}
                animate={getRingAnimation(cursorType)}
                transition={{
                    duration: 0.5
                }}
            ></motion.div>

        </>
    );
}


interface Props {
    status: string; // You can change the type based on your use case
}

const getDotAnimation = (cursorType: string) => {
    switch (cursorType) {
        case 'imageHover':
            return { width: '4rem', height: '4rem' };
        case 'anchorHover':
            return { width: '2rem', height: '2rem' };
        // Add other cases if needed
        default:
            return { width: '1rem', height: '1rem' };
    }
};
const getRingAnimation = (cursorType: string) => {
    switch (cursorType) {
        case 'imageHover':
            return { width: '4rem', height: '4rem' };
        case 'anchorHover':
            return { width: '2rem', height: '2rem' };
        // Add other cases if needed
        default:
            return { width: '4rem', height: '4rem' };
    }
};


const CursorsComponent: React.FC<Props> = ({ status }) => {
    const renderStatus = () => {
        switch (status) {

            case 'imageHover':
                return (
                    <motion.div
                        initial={{
                            scale: 0,
                            rotate:0,
                        }}
                        animate={{
                            scale: 1,
                            rotate:0,
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        // Use flexbox to center the text 'View'
                        className="fixed w-[4rem] h-[4rem] flex justify-center items-center font-bold text-green-700"
                    >
                        View
                    </motion.div>
                );

            case 'anchorHover':
                return (
                    <motion.div
                        initial={{
                            scale: 0,
                            rotate:90,
                        }}
                        animate={{
                            scale: 1,
                            rotate:45,
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        // Ensure the SVG is centered within the parent
                        className="relative w-[2rem] h-[2rem] flex justify-center items-center content-center"
                    >
                        <ArrowUp className="w-full h-full flex justify-center items-center content-center " />
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return <>{renderStatus()}</>;
};
export default CustomCursor;