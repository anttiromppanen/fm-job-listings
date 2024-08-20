"use client";

import JobListing from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import getListings from "./actions";

export default function useGetMoreListings({
  listings,
  filter,
}: {
  listings: JobListing[];
  filter: string[];
}) {
  return useInfiniteQuery({
    queryKey: ["listings", filter],
    queryFn: ({ pageParam }) => getListings({ pageParam, tags: filter }),
    getNextPageParam: (lastPage) =>
      lastPage && lastPage.length
        ? lastPage[lastPage.length - 1].id
        : undefined,
    initialPageParam: "",
    refetchOnWindowFocus: false,
    placeholderData: { pages: [listings], pageParams: [""] },
  });
}
