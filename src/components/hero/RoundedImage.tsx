import { assets } from "../../assets/assets";
import { useState, useRef, useEffect } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const RoundedImage = ( {src, alt} : ImageProps ) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="flex items-center relative p-2 max-sm:px-4">
      {/* Container with aspect ratio */}
      <div className="aspect-square w-full relative">
        {/* Dot grid background - positioned absolutely within the square */}
        <div className="absolute h-2/3 opacity-50 scale-100">
          <img
            src={assets.dots}
            alt="dots"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main image - with higher z-index to appear on top */}
        <div className="w-full overflow-hidden rounded-4xl rounded-tl-[200px] aspect-square relative z-10">
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            fetchPriority="high"
            onLoad={() => setIsLoaded(true)}
            className={`object-cover w-full h-full transition-[filter] duration-700 ease-in-out ${
              isLoaded ? "blur-0" : "blur-md"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default RoundedImage;