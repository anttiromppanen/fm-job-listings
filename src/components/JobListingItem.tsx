"use client";

import JobListing from "@/types/types";
import Image from "next/image";

function JobListingItem({ jobListing }: { jobListing: JobListing }) {
  const { company, featured, imgUrl } = jobListing;
  return (
    <article className="bg-white p-8 flex flex-col md:flex-row rounded-md shadow-xl shadow-userDesaturatedDarkCyan/20">
      <Image
        src={imgUrl}
        alt={`${company} Logo`}
        width={88}
        height={88}
        className="rounded-full select-none"
        priority
      />
      <div>
        <div className="flex font-bold">
          <h1 className="text-userDesaturatedDarkCyan">{company}</h1>
          {featured && (
            <span className="bg-black text-white text-sm flex items-center justify-center px-2 pt-1 rounded-full ml-2">
              FEATURED
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default JobListingItem;
