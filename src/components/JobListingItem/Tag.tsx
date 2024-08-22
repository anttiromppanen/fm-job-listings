import useFilterStore from "@/store/useFilterStore";
import React, { ChangeEvent, useId } from "react";

export default function Tag({ tag }: { tag: string }) {
  const filter = useFilterStore((state) => state.filter);
  const setFilters = useFilterStore((state) => state.setFilter);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFilters(e.target.value);

  const id = useId();
  return (
    <div
      key={tag}
      className="
          tag-checkbox buttons-hover-anim flex h-fit text-userDesaturatedDarkCyan focus-within:outline 
          focus-within:outline-2 focus-within:outline-userDesaturatedDarkCyan items-center px-2 py-1 
        bg-userFilterTablets relative rounded-md hover:bg-userDesaturatedDarkCyan hover:text-white"
    >
      <input
        id={`bordered-checkbox-${id}`}
        type="checkbox"
        value={tag}
        name="bordered-checkbox"
        onChange={handleChange}
        checked={filter?.length ? filter.includes(tag) : false}
        className="appearance-none w-full h-full absolute left-0 top-0 rounded-md opacity-0 cursor-pointer"
      />
      <label
        htmlFor={`bordered-checkbox-${id}`}
        className="w-full text-sm text-center font-bold select-none"
      >
        {tag}
      </label>
    </div>
  );
}
