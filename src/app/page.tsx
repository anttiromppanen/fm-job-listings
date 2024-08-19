import JobListings from "@/components/JobListings";
import getListings from "@/lib/middleware/actions";

export default async function Home() {
  const listings = await getListings({});

  return (
    <main className="">
      <JobListings listings={listings} />
    </main>
  );
}
