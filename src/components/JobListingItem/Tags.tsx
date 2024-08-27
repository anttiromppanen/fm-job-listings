import Tag from "./Tag";

interface TagsProps {
  tags: string[];
}

function Tags({ tags }: TagsProps) {
  return (
    <div className="flex gap-x-4 content-center flex-wrap gap-y-4 md:gap-y-2 md:gap-x-3 md:ml-10">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}

export default Tags;
