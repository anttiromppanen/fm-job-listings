"use client";

import getRandomPastelColor from "@/lib/middleware/helpers";
import JobListing from "@/types/types";
import Image from "next/image";
import { useMemo } from "react";

function MockLogo({ companyName }: { companyName: string }) {
  const randomColor = useMemo(() => getRandomPastelColor(), []);

  return (
    <div
      className="size-[88px] rounded-full text-userVeryDarkGrayishCyan font-semibold select-none flex justify-center items-center text-xs text-center p-1"
      style={{
        backgroundColor: randomColor,
        boxShadow: `inset 0px 0px 48px 0px #ababab`,
      }}
    >
      {companyName}
    </div>
  );
}

function JobListingItem({ jobListing }: { jobListing: JobListing }) {
  const { company, featured, imgUrl } = jobListing;
  return (
    <article className="bg-white p-8 flex flex-col md:flex-row rounded-md shadow-xl shadow-userDesaturatedDarkCyan/20">
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={`${company} Logo`}
          width={88}
          height={88}
          className="rounded-full select-none"
          priority
        />
      ) : (
        <MockLogo companyName={company} />
      )}
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
