import { Star } from "lucide-react";
import { assets, navLinks } from "../../assets/assets";
import { ThemeToggle } from "../../minor-components/ThemeToggle";
import { useSidebarStore } from "../../stores/useSidebarStore";
import { useThemeStore } from "../../stores/useThemeStore";
import { motion, AnimatePresence } from "motion/react";

const SideBar = () => {
  const { isOpen, close } = useSidebarStore();
  const { isDark } = useThemeStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="h-screen z-60 w-screen bg-black/50 backdrop-blur-sm fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.nav
            className="w-80 max-sm:w-72 bg-white dark:bg-neutral-900 h-full flex flex-col shadow-2xl border-r border-neutral-200 dark:border-neutral-800"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="h-16 flex justify-between items-center px-5 sm:px-6 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <img
                  src={isDark ? assets.logoDark : assets.logoLight}
                  alt="logo"
                  className="w-8"
                />
                <p className="font-bold text-sm leading-tight text-neutral-800 dark:text-stone-50">
                  JoJean<br />Consults
                </p>
              </div>
              <button
                onClick={() => close()}
                aria-label="close sidebar"
                className="size-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
              >
                <img
                  src={assets.closeSidebarIcon}
                  className="dark:invert"
                  alt="close"
                />
              </button>
            </div>

            {/* Nav links */}
            <menu className="px-4 sm:px-5 flex flex-col gap-y-4 mt-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.3, ease: "easeOut" }}
                  onClick={() => {
                    window.location.href = link.link;
                    close();
                  }}
                  className="list-none flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-green-400 hover:bg-green-500/10 dark:hover:bg-green-500/10 rounded-lg px-4 py-3 cursor-pointer font-medium text-sm transition-all duration-200"
                >
                  <link.icon size={22} />
                  {link.name}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4 * 0.07, duration: 0.3, ease: "easeOut" }}
                onClick={() => {
                  window.location.href = '#reviews';
                  close();
                }}
                className="list-none flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-green-500 dark:hover:text-green-400 hover:bg-green-500/10 dark:hover:bg-green-500/10 rounded-lg px-4 py-3 cursor-pointer font-medium text-sm transition-all duration-200"
              >
                <Star size={22} />
                Reviews
              </motion.li>
              <button
                onClick={() => { window.location.href = "#contact"; close(); }}
                className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-white font-semibold px-4 py-2.5 rounded-lg text-sm mb-2"
              >
                Contact Us
              </button>
            </menu>

            {/* Divider */}
            <div className="mx-5 mt-6 border-neutral-200 dark:border-neutral-800" />

            {/* Footer */}
            <div className="mt-auto mb-6 px-5 sm:px-6 flex flex-col items-center gap-3">
              <div className="scale-110">
                <ThemeToggle />
              </div>
              <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-1">
                © {new Date().getFullYear()} JoJean Consults
              </p>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;