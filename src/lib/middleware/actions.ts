"use server";

import prisma from "../db/client";

export default async function getListings({
  pageParam = undefined,
}: {
  pageParam?: string | undefined;
}) {
  const res = await prisma.jobListing.findMany({
    cursor: pageParam ? { id: pageParam } : undefined,
    take: 5,
    skip: pageParam ? 1 : 0,
  });
  return res;
}
