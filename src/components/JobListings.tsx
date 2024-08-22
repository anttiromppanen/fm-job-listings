"use client";

import useGetMoreListings from "@/lib/middleware/useGetMoreListings";
import JobListing from "@/types/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useFilterStore from "@/store/useFilterStore";
import getListings from "@/lib/middleware/actions";
import InfiniteLoadListingsComponent from "./InfiniteLoadListingsComponent";
import JobListingItem from "./JobListingItem";

function JobListings({ listings }: { listings: JobListing[] }) {
  const filter = useFilterStore((state) => state.filter);
  const [listingsState, setListingsState] = useState(listings);
  const { ref, inView } = useInView();
  const { data, hasNextPage, fetchNextPage } = useGetMoreListings({
    listings: listingsState,
    filter,
  });

  // fetch new data when user scrolls to the bottom of the page
  useEffect(() => {
    if (inView && hasNextPage) {
      (async () => {
        const res = await fetchNextPage();
        const newData = res.data?.pages.flat() || [];
        setListingsState([...newData]);
      })();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  // fetch new data when user selects a filter
  useEffect(() => {
    const getListingsAsync = async () => {
      const res = await getListings({ tags: filter });
      setListingsState(res);
    };
    getListingsAsync();
  }, [filter, setListingsState]);

  return (
    <div className="flex flex-col mt-10 mb-20 gap-y-5">
      {listingsState.map((jobListing: JobListing) => (
        <JobListingItem key={jobListing.id} jobListing={jobListing} />
      ))}
      {hasNextPage && data?.pages && (
        <InfiniteLoadListingsComponent loadMoreRef={ref} />
      )}
      {!hasNextPage && (
        <p className="text-neutral-500 mt-4 text-center">
          No more listings to show
        </p>
      )}
    </div>
  );
}

export default JobListings;
