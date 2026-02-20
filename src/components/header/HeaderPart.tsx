import { assets } from "../../assets/assets"
import HeaderUtilities from "./HeaderUtilities"
import Navigation from "./Navigation"
import { cn } from "../../utils/cn";
import useMediaQuery from "../hooks/useMediaQuery";
import { useThemeStore } from "../../stores/useThemeStore";
import { ThemeToggle } from "../../minor-components/ThemeToggle";
import { useSidebarStore } from "../../stores/useSidebarStore";


const Header = () => {
  const {isDark} = useThemeStore();
  const {open} = useSidebarStore();
  const md = useMediaQuery("(min-width: 768px)");

  return (
    <div className={cn("right-0 z-50 px-5 md:px-10 lg:px-20 h-16 flex items-center justify-between fixed top-0 left-0  rounded-b-xl", "bg-white/10 dark:bg-slate-900/10 backdrop-blur-lg shadow-sm")}>

      {!md && <button onClick={open} aria-label="toggle side bar" className="size-9">
        <img src={assets.sidebarIcon} className="dark:invert" alt="sidbar icon" />
      </button> }

      {/* first section for logo  */}
      <div className="logo flex gap-x-2 items-center shrink-0">
        <div className='w-9 max-md:w-8'>
          <img src={isDark ? assets.logoDark : assets.logoLight } alt="" />
        </div>
        <p className="whitespace-break-spaces max-sm:hidden dark:text-white font-medium">
          JoJean<br />Consults
        </p>
      </div>
      {/* middle-section */}
      <nav className="max-md:hidden">
        <Navigation />
      </nav>

      {/* third section  */}
      {md ? <HeaderUtilities /> : <div className="scale-110 grayscale-100 brightness-60 dark:brightness-200">
          <ThemeToggle />
        </div>} 
    </div>
  )
}

export default Header;