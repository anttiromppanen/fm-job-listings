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
    orderBy: [
      {
        featured: "desc",
      },
      {
        id: "desc",
      },
    ],
  });
  return res;
}

export async function getListingBySlug(slug: string) {
  const res = await prisma.jobListing.findUnique({
    where: {
      slug,
    },
  });
  return res;
}
