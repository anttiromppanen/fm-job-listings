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

function JobListingMockLogo({ companyName }: { companyName: string }) {
  const randomColor = useMemo(() => getRandomPastelColor(), []);

  return (
    <div
      className="size-[44px] md:size-[88px] rounded-full text-userVeryDarkGrayishCyan font-semibold select-none flex justify-center items-center text-[6px] md:text-xs text-center p-1"
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
      card-shadow bg-white p-5 md:p-8 flex flex-col justify-between md:flex-row gap-x-4 rounded-md relative
      ${featured && "border-l-4 md:border-l-8 border-l-userDesaturatedDarkCyan"}`}
    >
      <div className="flex">
        <div className="size-[44px] md:size-[88px] absolute left-4 -top-6 md:relative md:left-auto md:top-auto">
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
            <JobListingMockLogo companyName={company} />
          )}
        </div>
        <div className="flex flex-col gap-y-2 justify-between h-full md:ml-6 mt-4 md:mt-0 md:gap-y-0">
          <div className="flex flex-wrap-reverse gap-y-1 font-bold">
            <h1 className="text-userDesaturatedDarkCyan text-sm md:text-base mr-2">
              {company}
            </h1>
            <div className="flex gap-x-2">
              {isNew && (
                <span className="bg-userDesaturatedDarkCyan text-white text-xs flex items-center justify-center px-2 pt-1 rounded-full">
                  NEW!
                </span>
              )}
              {featured && (
                <span className="bg-userVeryDarkGrayishCyan text-white text-xs flex items-center justify-center px-2 pt-1 rounded-full">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          <Link
            href={`/joblisting/${slug}`}
            className="text-base md:text-lg font-bold text-userVeryDarkGrayishCyan"
          >
            {title}
          </Link>
          <div className="flex text-userDarkGrayishCyan flex-wrap font-medium">
            <p className="">{parsedDate}</p>
            <span className="mx-2">•</span>
            <p className="">{parsePermanency(permanency)}</p>
            <span className="mx-2">•</span>
            <p className="">{location}</p>
          </div>
        </div>
      </div>
      <hr className="border-userDarkGrayishCyan/50 mt-4 mb-6 md:hidden" />
      <Tags tags={tags} />
    </article>
  );
}

export default JobListingItem;
