"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import useFilterStore from "@/store/useFilterStore";
import FilterItem from "./FilterItem";

const animationVariants: Variants = {
  hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 50 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

function FilterBar() {
  const filter = useFilterStore((state) => state.filter);
  const clearFilter = useFilterStore((state) => state.clearFilter);

  return (
    <AnimatePresence>
      {filter.length && (
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="card-shadow bg-white mx-auto flex justify-between max-w-6xl -mt-7 px-10 py-4 rounded-md"
        >
          <div className="flex gap-x-4">
            <AnimatePresence mode="sync">
              {filter.map((item) => (
                <FilterItem key={item} item={item} />
              ))}
            </AnimatePresence>
          </div>
          <button
            type="button"
            onClick={clearFilter}
            className="buttons-hover-anim text-userDarkGrayishCyan text-sm font-bold hover:underline hover:text-userDesaturatedDarkCyan p-1"
          >
            Clear
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FilterBar;
