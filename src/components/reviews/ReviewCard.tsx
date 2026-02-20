import { motion } from "motion/react"
import type { Review } from '../../assets/interfaces'
import { assets } from "../../assets/assets";
import { cn } from "../../utils/cn";

interface ReviewProps {
  item: Review;
  index: number
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-amber-400" : "text-neutral-300 dark:text-neutral-600"}>
          ★
        </span>
      ))}
    </div>
  )
}

const ReviewCard = ({ item, index }: ReviewProps) => {
  return (
    <motion.div
      className={cn("bg-white dark:bg-neutral-900 rounded-xl flex flex-col p-6 border max-lg:basis-90 max-sm:basis-80 shrink-0 dark:border-neutral-800      border-neutral-200 hover:border-amber-100 dark:hover:border-amber-400/20",
        index === 1 && '-translate-y-5'
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ scale: 1.03}}
      whileTap={{ scale: 0.97 }}
    >
      <StarRating rating={item.rating} />

      <img
        src={assets.quoteImg}
        alt="quote"
        className="w-8 opacity-20 dark:invert dark:opacity-20 mt-4"
      />

      <p className="text-neutral-600 dark:text-stone-300 text-sm leading-relaxed mt-3 flex-1 line-clamp-6">
        {item.text}
      </p>

      <div className="flex items-center gap-3 mt-6">
        <img
          src={item.image}
          alt={item.name}
          className="size-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-neutral-800 dark:text-stone-100">{item.name}</p>
          <p className="text-xs text-neutral-400 dark:text-stone-500">Verified Client</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ReviewCard