import { assets } from "../../assets/assets";
import { useThemeStore } from "../../stores/useThemeStore";

const linkToPortfolio = 'https://cassius-samuel-dev.vercel.app';
const instagramLink = 'https://www.instagram.com/cassiussamuel.cezar/?hl=en';

const socialLinks = [
  {
    label: "Twitter",
    href: linkToPortfolio,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.892-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: linkToPortfolio,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: instagramLink,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: linkToPortfolio,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const { isDark } = useThemeStore();

  return (
    <footer className="w-full bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-3 sm:px-5 md:px-10 lg:px-20 pt-12 pb-6">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6">

        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2">
            <img
              src={isDark ? assets.logoDark : assets.logoLight}
              alt="logo"
              className="h-9 w-auto"
            />
            <p className="font-bold text-lg leading-tight text-neutral-800 dark:text-stone-50">
              JoJean<br />Consults
            </p>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Helping couples rediscover love, trust, and harmony through compassionate professional guidance.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-400 hover:text-green-500 dark:text-neutral-500 dark:hover:text-green-400 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-neutral-800 dark:text-stone-100 uppercase tracking-wider">
            Quick Links
          </p>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 w-fit"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-neutral-800 dark:text-stone-100 uppercase tracking-wider">
            Contact
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">hello@jojeanconsults.com</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">+1 (800) 123-4567</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Lagos, Nigeria</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-400 dark:text-neutral-600">
        <p>© {new Date().getFullYear()} JoJean Consults. All rights reserved.</p>
        
        <a
          href={linkToPortfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
        >
          Built by Cassius Samuel
        </a>
      </div>
    </footer>
  );
};

export default Footer;