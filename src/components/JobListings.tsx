"use client";

import JobListing from "@/types/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useGetMoreListings from "@/lib/middleware/useGetMoreListings";
import JobListingItem from "./JobListingItem";

function JobListings({ listings }: { listings: JobListing[] }) {
  const { ref, inView } = useInView();
  const { data, hasNextPage, fetchNextPage } = useGetMoreListings({ listings });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="flex flex-col my-20 gap-y-4">
      {data?.pages
        .flat()
        .map((jobListing: JobListing) => (
          <JobListingItem key={jobListing.id} jobListing={jobListing} />
        ))}
      {hasNextPage && data?.pages && (
        <div
          ref={ref}
          className="py-20 flex items-center justify-center text-lg"
        >
          Load More
        </div>
      )}
    </div>
  );
}

export default JobListings;
