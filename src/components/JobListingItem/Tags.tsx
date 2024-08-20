import useFilterStore from "@/store/useFilterStore";
import { ChangeEvent } from "react";

interface TagsProps {
  tags: string[];
}

function Tags({ tags }: TagsProps) {
  const filter = useFilterStore((state) => state.filter);
  const setFilters = useFilterStore((state) => state.setFilter);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFilters(e.target.value);

  return (
    <div className="flex gap-x-3 items-center">
      {tags.map((tag) => (
        <div
          key={tag}
          className="tag-checkbox flex h-fit text-userDesaturatedDarkCyan items-center px-2 py-1 bg-userFilterTablets relative rounded-md"
        >
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value={tag}
            name="bordered-checkbox"
            onChange={handleChange}
            checked={filter?.length ? filter.includes(tag) : false}
            className="appearance-none w-full h-full absolute left-0 top-0 rounded-md opacity-0"
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full text-sm text-center font-bold select-none"
          >
            {tag}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Tags;
