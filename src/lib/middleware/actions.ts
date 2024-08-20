"use server";

import prisma from "../db/client";

export default async function getListings({
  pageParam = undefined,
  tags = [],
}: {
  pageParam?: string | undefined;
  tags?: string[];
}) {
  const res = await prisma.jobListing.findMany({
    cursor: pageParam ? { id: pageParam } : undefined,
    take: 7,
    skip: pageParam ? 1 : 0,
    where: {
      tags: {
        hasEvery: tags,
      },
    },
  });
  return res;
}
