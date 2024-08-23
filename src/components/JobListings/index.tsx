"use client";

import getListings from "@/lib/middleware/actions";
import useGetMoreListings from "@/lib/middleware/useGetMoreListings";
import useFilterStore from "@/store/useFilterStore";
import JobListing from "@/types/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import InfiniteLoadListingsComponent from "../InfiniteLoadListingsComponent";
import Loader from "../Loader";
import JobListingsContainer from "./JobListingsContainer";

function JobListings({ listings }: { listings: JobListing[] }) {
  const [isLoading, setIsLoading] = useState(false);
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
      let loadingTimeout;

      // Set a timer to set `isLoading` to true if it takes more than 500ms
      const loadingPromise: Promise<void> = new Promise((resolve) => {
        loadingTimeout = setTimeout(() => {
          setIsLoading(true);
          resolve();
        }, 400);
      });

      const listingsPromise = await getListings({ tags: filter });
      const res = await Promise.race([listingsPromise, loadingPromise]);

      clearTimeout(loadingTimeout);
      setIsLoading(false);

      if (res) {
        setListingsState(res);
      }
    };
    getListingsAsync();
  }, [filter, setListingsState, setIsLoading]);

  return (
    <div className="mt-10 mb-20">
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <JobListingsContainer listingsState={listingsState} />
      )}
      {hasNextPage && data?.pages && !isLoading && (
        <InfiniteLoadListingsComponent loadMoreRef={ref} />
      )}
      {!hasNextPage && !isLoading && (
        <p className="text-neutral-500 mt-4 text-center">
          No more listings to show
        </p>
      )}
    </div>
  );
}

export default JobListings;
