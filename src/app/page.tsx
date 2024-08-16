import JobListingItem from "@/components/JobListingItem";
import prisma from "@/server/db/client";

export const dynamic = "force-dynamic";

export default async function Home() {
  const jobListings = await prisma.jobListing.findMany();

  return (
    <main className="">
      <div className="flex flex-col my-20 gap-y-4">
        {jobListings.map((jobListing) => (
          <JobListingItem key={jobListing.id} jobListing={jobListing} />
        ))}
      </div>
    </main>
  );
}
