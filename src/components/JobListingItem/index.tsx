"use client";

import {
  getRandomPastelColor,
  isListingNew,
  parseDate,
  parsePermanency,
} from "@/lib/helpers";
import JobListing from "@/types/types";
import Image from "next/image";
import { useMemo } from "react";
import Link from "next/link";
import Tags from "./Tags";

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
  const {
    company,
    featured,
    imgUrl,
    title,
    permanency,
    location,
    createdAt,
    tags,
    slug,
  } = jobListing;
  const parsedDate = parseDate(createdAt);
  const isNew = isListingNew(parsedDate);

  return (
    <article
      className={`
      card-shadow bg-white p-8 flex flex-col justify-between md:flex-row gap-x-4 rounded-md
      ${featured && "border-l-8 border-l-userDesaturatedDarkCyan"}`}
    >
      <div className="flex">
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
        <div className="flex flex-col justify-between h-full ml-6">
          <div className="flex font-bold">
            <h1 className="text-userDesaturatedDarkCyan">{company}</h1>
            {isNew && (
              <span className="bg-userDesaturatedDarkCyan text-white text-xs flex items-center justify-center px-2 pt-1 rounded-full ml-2">
                NEW!
              </span>
            )}
            {featured && (
              <span className="bg-userVeryDarkGrayishCyan text-white text-xs flex items-center justify-center px-2 pt-1 rounded-full ml-2">
                FEATURED
              </span>
            )}
          </div>
          <Link
            href={`/joblisting/${slug}`}
            className="text-lg font-bold text-userVeryDarkGrayishCyan"
          >
            {title}
          </Link>
          <div className="flex text-userDarkGrayishCyan">
            <p className="">{parsedDate}</p>
            <span className="mx-2">•</span>
            <p className="">{parsePermanency(permanency)}</p>
            <span className="mx-2">•</span>
            <p className="">{location}</p>
          </div>
        </div>
      </div>
      <Tags tags={tags} />
    </article>
  );
}

export default JobListingItem;
