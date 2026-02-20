import { assets } from "../../assets/assets";
import { useThemeStore } from "../../stores/useThemeStore";
import RoundedImage from "./RoundedImage";

const Hero = () => {
  const {isDark} = useThemeStore()
  return (
    <section id='home' className="w-full pt-25 max-lg:pt-15 px-3 sm:px-5 md:px-10 lg:px-20 relative lg:mb-50 pb-15 dark:bg-linear-to-b from-neutral-950 via-neutral-950 to-gray-900/40 isolate transition-colors duration-300">
      <div className="flex flex-col lg:grid grid-cols-[55%_40%] gap-[5%]">
        <div className="flex flex-col items-start max-lg:items-center justify-center">
          <h1 className="max-sm:text-5xl max-sm:leading-15 text-5xl md:text-7xl lg:text-5xl xl:text-6xl font-bold dark:text-stone-50 mb-7 max-lg:text-center max-lg:mt-25 max-lg:font-extrabold max-lg:text-7xl max-w-2xl">
            Marriage and Relationship Coaching
          </h1>
          <p className="font-medium md-contrast text-lg tracking-wide max-lg:text-center max-lg:max-w-2xl">
            Marriage counseling is fundamentally about learning to cope with
            life challenges within the constraints of personal limitations and
            the environment
          </p>
         <div className="flex max-sm:flex-col gap-x-4 max-lg:mb-6 mt-7">
           <button className="rounded-xl bg-green-600 dark:bg-green-500 text-white px-7 py-4 w-36 font-medium">
            Book Now
          </button>
           <button className="lg:hidden rounded-xl bg-neutral-950 dark:bg-stone-100 dark:text-neutral-950 text-white px-7  py-4 w-36 font-medium">
            Contact Us
          </button>
          
         </div>
        </div>
        
        <div className="max-lg:hidden">
          <RoundedImage src={assets.heroImg} alt='hero' />
        </div>
      </div>
      <div className="absolute max-lg:hidden -z-10 -bottom-50 left-80 w-100 overflow-hidden rounded-xl shadow-2xl shadow-black/60 dark:shadow-slate-200/20">
        <img src={ isDark ? assets.hoverImgDark : assets.hoverImg } alt="hover image" className="" />
      </div>
    </section>
  );
};

export default Hero;