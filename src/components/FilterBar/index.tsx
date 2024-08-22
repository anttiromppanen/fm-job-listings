"use client";

import Image from "next/image";
import useFilterStore from "@/store/useFilterStore";

function FilterItem({ item }: { item: string }) {
  const setFilter = useFilterStore((state) => state.setFilter);
  const handleRemoveFilter = () => setFilter(item);

  return (
    <div className="bg-userFilterTablets text-xs rounded-md flex items-center">
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
    </div>
  );
}

function FilterBar() {
  const filter = useFilterStore((state) => state.filter);
  const clearFilter = useFilterStore((state) => state.clearFilter);

  return (
    <div className="card-shadow bg-white mx-auto flex justify-between max-w-6xl -mt-7 px-10 py-4 rounded-md">
      <div className="flex gap-x-4">
        {filter.map((item) => (
          <FilterItem key={item} item={item} />
        ))}
      </div>
      <button
        type="button"
        onClick={clearFilter}
        className="buttons-hover-anim text-userDarkGrayishCyan text-sm font-bold hover:underline hover:text-userDesaturatedDarkCyan p-1"
      >
        Clear
      </button>
    </div>
  );
}

export default FilterBar;
