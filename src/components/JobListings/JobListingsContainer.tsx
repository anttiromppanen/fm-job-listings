import JobListing from "@/types/types";
import JobListingItem from "../JobListingItem";

function JobListingsContainer({
  listingsState,
}: {
  listingsState: JobListing[];
}) {
  return (
    <div className="flex flex-col gap-y-5">
      {listingsState.map((jobListing: JobListing) => (
        <JobListingItem key={jobListing.id} jobListing={jobListing} />
      ))}
    </div>
  );
}

export default JobListingsContainer;
