import { useRef } from "react";
import { motion } from "motion/react";
import { assets, reviews } from "../../assets/assets";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="review w-full max-w-screen pt-25 max-lg:pt-15 px-3 sm:px-5 md:px-10 lg:px-20 pb-20">
      <div>
        <div className="heading flex flex-col items-center mb-10">
          <motion.h1
            className="text-3xl lg:text-4xl xl:text-5xl text-center dark:text-stone-50 font-bold max-w-md lg:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            What our customers say about us
          </motion.h1>
          <motion.p
            className="md-contrast max-w-lg text-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            We have successfully helped hundreds of couples to achieve marital
            harmony
          </motion.p>
        </div>

        <div className="absolute -translate-y-5 right-15 z-20 lg:hidden max-sm:right-5 dark:invert">
          <button
            onClick={() => scroll("left")}
            className="size-11"
            aria-label="scroll left button"
          >
            <img src={assets.arrowLeft} alt="left-btn" className="opacity-50" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="size-11 ml-3"
            aria-label="scroll right button"
          >
            <img src={assets.arrowLeft} alt="right-btn" className="rotate-180 opacity-50" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="w-full xl:px-20 flex flex-row lg:grid lg:grid-cols-3 mt-15 gap-x-4 xl:gap-x-6 max-lg:overflow-x-scroll max-lg:overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative py-5 max-lg:px-4"
        >
          {reviews.map((item, index) => (
            <ReviewCard key={index} item={item} index={index} />
          ))}
        </div>

        <div className="text-xs ml-4 -mt-5 lg:hidden pt-4 italic text-neutral-500">
          scroll <span className="max-md:hidden">through the reviews</span> using the mouse or the buttons above
        </div>
      </div>
    </section>
  );
};

export default Reviews;