import { navLinks } from "../../assets/assets"

const Navigation = () => {
  return (
    <menu className="flex dark:text-stone-300 text-stone-800 gap-x-5 font-medium lg:gap-x-8 text-sm">
      {navLinks.map(link => (
        <li key={link.name} className="hover:text-green-500">
          <a href={link.link}>
            {link.name}
          </a>
        </li>
      )) }
    </menu>
  )
}

export default Navigation