import { useThemeStore } from '../stores/useThemeStore';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { mode, toggle } = useThemeStore();
  const isDark = mode === 'dark';

  return (
    <button
      onClick={toggle}
      className="group btn-ghost"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Icon with smooth transition */}
      <div className="btn-ghost-icon">
        {/* Sun icon */}
        <FaSun 
          size={18} 
          className={`absolute inset-0 text-amber-500 transition-all duration-500 ${
            isDark 
              ? 'opacity-0 rotate-180 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        
        {/* Moon icon */}
        <FaMoon 
          size={18} 
          className={`absolute inset-0 text-indigo-400 transition-all duration-500 ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`}
        />
      </div>

      {/* Subtle glow effect on hover */}
      <div className="btn-ghost-glow" />

      {/* Tooltip */}
      <span className="tooltip">
        {isDark ? 'Light' : 'Dark'} mode
      </span>
    </button>
  );
};