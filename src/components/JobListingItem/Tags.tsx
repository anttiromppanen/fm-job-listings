import Tag from "./Tag";

interface TagsProps {
  tags: string[];
}

function Tags({ tags }: TagsProps) {
  return (
    <div className="flex gap-x-3 items-center">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}

export default Tags;
