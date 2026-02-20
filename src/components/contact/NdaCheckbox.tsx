import { Check } from "lucide-react";

const NdaCheckbox = () => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative flex items-center justify-center">
        {/* The Peer Input */}
        <input 
          type="checkbox" 
          name="nda" 
          className="peer sr-only" 
        />
        <div
          className="size-5 rounded-md border-2 border-neutral-200 dark:border-slate-700 
                     peer-checked:bg-green-500 peer-checked:border-green-500 
                     transition-all flex items-center justify-center"
        >
          <Check
            size={12}
            style={{ 
              display: 'block' 
            }}
            className="text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            strokeWidth={4}
          />
        </div>
      </div>

      <span
        className="text-sm text-neutral-500 dark:text-stone-400 
                   group-hover:text-neutral-700 dark:group-hover:text-stone-200 
                   transition-colors"
      >
        I require an NDA before sharing details
      </span>
    </label>
  );
};

export default NdaCheckbox;