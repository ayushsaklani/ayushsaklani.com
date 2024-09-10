// Core component that receives mouse positions and renders pointer and content

import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const FollowerPointerCard = ({
    children,
    className,
    title,
}: {
    children: React.ReactNode;
    className?: string;
    title?: string | React.ReactNode;
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const [rect, setRect] = useState<DOMRect | null>(null);
    const [isInside, setIsInside] = useState<boolean>(false); // Add this line

    useEffect(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (rect) {
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            x.set(e.clientX - rect.left + scrollX);
            y.set(e.clientY - rect.top + scrollY);
        }
    };
    const handleMouseLeave = () => {
        setIsInside(false);
    };

    const handleMouseEnter = () => {
        setIsInside(true);
    };
    return (
        <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            style={{
                cursor: "none",
            }}
            ref={ref}
            className={cn("relative", className)}
        >
            <AnimatePresence>
                {isInside && <FollowPointer x={x} y={y} title={title} />}
            </AnimatePresence>
            {children}
        </div>
    );
};

export const FollowPointer = ({
    x,
    y,
    title,
}: {
    x: any;
    y: any;
    title?: string | React.ReactNode;
}) => {
    const colors = [
        "var(--sky-500)",
        "var(--neutral-500)",
        "var(--teal-500)",
        "var(--green-500)",
        "var(--blue-500)",
        "var(--red-500)",
        "var(--yellow-500)",
    ];
    return (
        <motion.div
            className="h-4 w-4  absolute z-50"
            style={{
                top: y,
                left: x,
                pointerEvents: "none",
            }}
            initial={{
                scale: 1,
                opacity: 1,
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            exit={{
                scale: 0,
                opacity: 0,
            }}
        >
            {/* <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-sky-500 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-sky-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg> */}

            <svg className="h-8 w-8 text-sky-500  stroke-sky-600"
                height="1em"
                width="1em"
                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 447.992 447.992" fill="#000000"><g id="SVGRepo_bgCarrier" 
                stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g transform="translate(0 -1020.36)" shape-rendering="auto" image-rendering="auto" 
                color-rendering="auto" color-interpolation="sRGB"> 
                <path style={{fill:'#5A3392'}} d="M223.937,1068.314c-97.108,0-175.984,78.877-175.984,175.984s78.877,175.984,175.984,175.984 c97.107,0,176.102-78.877,176.102-175.984C400.039,
                1147.191,321.045,1068.314,223.937,1068.314L223.937,1068.314z"></path> <path style={{fill:"#29A3EC;"}} d="M223.937,1084.257c88.46,0,160.039,71.58,160.039,160.039c0,88.461-71.579,160.039-160.039,160.039 
                c-88.461,0-159.922-71.578-159.922-160.039C64.016,1155.835,135.476,1084.257,223.937,1084.257L223.937,1084.257z"></path> 
                <path style={{fill:"#3CDEF6;"}} d="M223.942,1096.283c81.814,0,148.014,66.199,148.014,148.014c0,81.813-66.2,148.014-148.014,148.014 s-147.905-66.201-147.905-148.014C76.037,1162.482,142.128,1096.283,223.942,1096.283z"></path> 
                <path style={{fill:"#FFFFFF;"}} d="M223.937,1132.328c61.95,0.002,112.086,50.02,112.086,111.969 c0,61.951-50.136,111.969-112.086,111.969c-61.951,0-111.969-50.018-111.969-111.969 C111.969,1182.345,161.986,1132.328,223.937,
                1132.328L223.937,1132.328z"></path> 
                <path style={{fill:"#EBFEFF;"}} d="M223.943,1144.298c55.299,0,100.052,44.67,100.052,100c0,55.328-44.753,100-100.052,100 c-55.3,0-99.948-44.672-99.948-100C123.996,1188.968,168.644,1144.298,223.943,1144.298L223.943,1144.298z"></path> 
                <path style={{fill:"#5A3392;"}} d="M223.937,1212.291c-17.579,0-32.008,14.43-32.008,32.008c-0.001,17.58,14.429,32.008,32.008,32.008 c17.578,0,32.008-14.43,32.007-32.008C255.945,1226.72,241.515,1212.291,223.937,
                1212.291L223.937,1212.291z"></path> 
                <path style={{fill:"#EE746C;"}} d="M223.937,1228.353c8.931,0,16.063,7.014,16.063,15.945s-7.132,16.063-16.063,16.063 c-8.932,0-15.945-7.131-15.945-16.063C207.993,1235.367,215.006,1228.353,223.937,1228.353L223.937,1228.353z"></path>
                    <g> <path style={{fill:"#5A3392;"}} d="M216.024,1020.361v143.977h15.945v-143.976L216.024,1020.361L216.024,1020.361z"></path> 
                    <path style={{fill:"#5A3392;"}} d="M216.024,1324.257v144.094h15.945v-144.094H216.024L216.024,1324.257z"></path>
                     <path style={{fill:"#5A3392;"}} d="M304.016,1236.265v16.063h143.976v-16.063H304.016L304.016,1236.265z"></path>
                      <path style={{fill:"#5A3392;"}} d="M0,1236.265v16.063h143.976v-16.063H0z"></path> </g> 
                      <path style={{fill:"#FB9761;"}} d="M223.959,1234.357c5.582,0,10.037,4.385,10.037,9.961c0,5.582-4.451,10.039-10.037,10.039 c-5.582,0-9.963-4.451-9.963-10.039C213.996,1238.744,218.38,1234.357,223.959,
                      1234.357L223.959,1234.357z"></path> <g> 
                        <path style={{fill:"#5A3392;"}} d="M251.402,1119.562c-4.409,0.23-7.796,3.994-7.564,8.402c0.188,3.574,2.729,6.59,6.221,7.379 c41.006,9.807,72.99,41.787,82.844,82.783c1.021,
                      4.301,5.336,6.959,9.636,5.939c4.301-1.021,6.96-5.336,5.939-9.637 c-0.004-0.018-0.008-0.035-0.013-0.053c-11.252-46.813-47.862-83.365-94.687-94.563c-0.774-0.203-1.575-0.289-2.375-0.256 L251.402,1119.562z"></path> 
                      <path style={{fill:"#5A3392;"}} d="M196.246,1119.593c-0.717-0.01-1.431,0.076-2.125,0.256c-46.722,11.215-83.244,47.67-94.531,94.375 c-1.141,4.266,1.391,8.648,5.657,9.789c4.265,1.141,8.648-1.391,9.789-5.656c0.031-0.117,
                      0.06-0.234,0.085-0.352 c9.885-40.898,41.803-72.803,82.719-82.623c4.302-0.994,6.984-5.287,5.99-9.588c-0.82-3.553-3.94-6.1-7.584-6.193 L196.246,1119.593z"></path> 
                      <path style={{fill:"#5A3392;"}} d="M340.84,1264.343c-3.796-0.082-7.126,2.516-7.969,6.219c-9.873,40.908-41.8,72.826-82.719,82.656 c-4.328,0.873-7.129,5.09-6.256,9.418s5.09,7.129,9.418,6.256c0.198-0.041,0.394-0.088,
                      .588-0.143 c46.726-11.225,83.257-47.693,94.531-94.406c1.108-4.273-1.458-8.637-5.732-9.746 C342.093,1264.441,341.468,1264.355,340.84,1264.343z"></path> 
                      <path style={{fill:"#5A3392;"}} d="M106.84,1264.093c-4.41,0.221-7.805,3.975-7.584,8.385c0.027,0.535,0.107,1.066,0.24,1.584 c11.192,46.814,47.734,83.422,94.531,94.686c4.297,1.035,8.621-1.609,
                      9.656-5.906s-1.609-8.621-5.906-9.656l0,0 c-40.982-9.865-72.918-41.846-82.719-82.846c-0.846-3.811-4.321-6.453-8.219-6.25V1264.093z"></path> </g> </g> </g>
                      </svg>
            <motion.div
                style={{
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                }}
                initial={{
                    scale: 0.5,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                exit={{
                    scale: 0.5,
                    opacity: 0,
                }}
                className={
                    "px-2 py-2 bg-neutral-200 text-white whitespace-nowrap min-w-max text-xs rounded-full"
                }
            >
                {title || `William Shakespeare`}
            </motion.div>
        </motion.div>
    );
};
