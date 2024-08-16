import getPlaceholderImage from "@/helpers/imageBlur";
import JobListing from "@/types/types";
import Image from "next/image";

async function JobListingItem({ jobListing }: { jobListing: JobListing }) {
  const { company, title, imgUrl } = jobListing;
  const blurImg = await getPlaceholderImage(imgUrl);

  return (
    <div className="bg-white p-10 rounded-md shadow-xl shadow-userDesaturatedDarkCyan/20">
      <Image
        src={imgUrl}
        alt={`${company} Logo`}
        width={88}
        height={88}
        loading="lazy"
        placeholder="blur"
        blurDataURL={blurImg.placeholder}
        className="rounded-full"
      />
      {company} - {title}
    </div>
  );
}

export default JobListingItem;
