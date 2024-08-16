import prisma from "../server/db/client";

async function fetchJobListings() {
  const jobListings = await prisma.jobListing.findMany();

  return {
    props: {
      jobListings: JSON.parse(JSON.stringify(jobListings)),
    },
  };
}

export default fetchJobListings;
