"use client";

import JobListing from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import getListings from "./actions";

export default function useGetMoreListings({
  listings,
}: {
  listings: JobListing[];
}) {
  return useInfiniteQuery({
    queryKey: ["listings"],
    queryFn: ({ pageParam }) => getListings({ pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage && lastPage.length
        ? lastPage[lastPage.length - 1].id
        : undefined,
    initialPageParam: "",
    refetchOnWindowFocus: false,
    placeholderData: { pages: [listings], pageParams: [""] },
  });
}
