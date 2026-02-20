import { ThemeToggle } from "../../minor-components/ThemeToggle"

const HeaderUtilities = () => {
  return (
    <div className="flex gap-3"> 
      <ThemeToggle />
      <button 
      className="bg-linear-to-br from-green-600 to-green-800 rounded-lg px-4 text-sm py-2 font-medium text-white"
      onClick={() => {
        window.location.href="#contact"
      }}>
        Contact us
      </button>
    </div>
  )
}

export default HeaderUtilities