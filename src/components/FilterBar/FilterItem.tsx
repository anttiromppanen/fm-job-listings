import useFilterStore from "@/store/useFilterStore";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const animationVariants: Variants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -10, opacity: 0 },
};

function FilterItem({ item }: { item: string }) {
  const setFilter = useFilterStore((state) => state.setFilter);
  const handleRemoveFilter = () => setFilter(item);

  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-userFilterTablets text-xs rounded-md flex items-center"
    >
      <span className="text-userDesaturatedDarkCyan px-2 pt-1 font-bold cursor-pointer">
        {item}
      </span>
      <button
        type="button"
        aria-label={`Remove ${item} from filter`}
        onClick={handleRemoveFilter}
        className="buttons-hover-anim bg-userDesaturatedDarkCyan flex items-center justify-center p-2 rounded-r-md hover:bg-userVeryDarkGrayishCyan"
      >
        <Image
          src="/img/icon-remove.svg"
          alt="Remove icon"
          width={10}
          height={10}
        />
      </button>
    </motion.div>
  );
}

export default FilterItem;
