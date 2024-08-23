import { AnimatePresence, motion, Variants } from "framer-motion";
import JobListing from "@/types/types";
import JobListingItem from "../JobListingItem";

const animationVariants: Variants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      // i % n = i % number of items loaded from infinite scroll
      delay: 0.25 * (i % 7),
    },
  }),
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.05,
    },
  },
};

function JobListingsContainer({
  listingsState,
}: {
  listingsState: JobListing[];
}) {
  return (
    <div className="flex flex-col gap-y-5">
      <AnimatePresence initial={false}>
        {listingsState.map((jobListing: JobListing, i) => (
          <motion.div
            key={jobListing.id}
            variants={animationVariants}
            initial="initial"
            exit="initial"
            custom={i}
            animate="animate"
            viewport={{ once: true }}
          >
            <JobListingItem jobListing={jobListing} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default JobListingsContainer;
