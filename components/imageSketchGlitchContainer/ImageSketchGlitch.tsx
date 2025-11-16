import { ImageSketchGlitchProps } from '@/types';
import Script from 'next/script';



const ImageSketchGlitch: React.FC<ImageSketchGlitchProps> = ({src, alt }) => {


  return (
   <div className="content">

				<svg id="theSVG" width="100%" height="100%" viewBox="0 0 600 750">
					<filter id="imgFilter">
						<feTurbulence type="turbulence" baseFrequency="0.07" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence1"/>
						<feDisplacementMap in="SourceGraphic" in2="turbulence1" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap3"/>
					</filter>
					<g>
						<image xlinkHref={src} x="10" y="187.5" width="500"  filter="url(#imgFilter)" aria-label={alt} />
					</g>
				</svg>
        <Script type="text/javascript" src="/js/sketch_glitch.js"></Script>
		</div>

  );
};

export default ImageSketchGlitch;
