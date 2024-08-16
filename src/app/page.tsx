import prisma from "@/db/client";

export default async function Home() {
  const jobListings = await prisma.jobListing.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello world</h1>
      <div>
        {jobListings.map((jobListing) => (
          <div key={jobListing.id} className="mt-10 bg-teal-500">
            <h2>{jobListing.title}</h2>
            <p>{jobListing.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
