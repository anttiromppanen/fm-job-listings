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
          className="user-container -mt-8 md:-mt-7"
        >
          <div className="card-shadow bg-white flex justify-between px-4 md:px-10 py-4 rounded-md">
            <div className="flex flex-wrap gap-y-4 gap-x-4">
              <AnimatePresence mode="sync">
                {filter.map((item) => (
                  <FilterItem key={item} item={item} />
                ))}
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={clearFilter}
              className="buttons-hover-anim text-userDarkGrayishCyan ml-4 md:text-sm font-bold hover:underline hover:text-userDesaturatedDarkCyan p-1"
            >
              Clear
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FilterBar;
