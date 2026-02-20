import { motion } from "motion/react"
import type { Solution } from '../../assets/interfaces'

interface SolutionsCardProps {
  item: Solution;
  index: number
}

const SolutionsCard = ({ item, index }: SolutionsCardProps) => {
  return (
    <motion.div
      className='dark:bg-neutral-800 bg-green-100 rounded-lg text-stone-50 dark:text-stone-900 flex flex-col py-5 pb-7 items-center p-3 border border-transparent cursor-pointer max-w-lg self-center'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ scale: 1.04, borderColor: "rgb(245 158 11 / 0.2)" }}
      whileTap={{ scale: 0.94 }}
    >
      <div className='dark:bg-green-500/30 bg-white size-11 rounded-lg p-1.5'>
        <img src={item.image} alt="icon" className='dark:invert opacity-50' />
      </div>
      <div className='mt-4'>
        <h3 className='text-center mb-2 text-neutral-950 dark:text-white font-semibold'>{item.name}</h3>
        <p className='md-contrast text-sm text-center md-contrast'>
          {item.text}
        </p>
      </div>
    </motion.div>
  )
}

export default SolutionsCard