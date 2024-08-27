import MockLogo from "@/components/MockLogo";
import { parsePermanency } from "@/lib/helpers";
import { getListingBySlug } from "@/lib/middleware/actions";
import { loremIpsum } from "lorem-ipsum";
import JobListing from "@/types/types";
import Image from "next/image";

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const listing = (await getListingBySlug(slug)) as JobListing;
  // new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="my-10">
      <div className="flex gap-x-4 items-center">
        {listing.imgUrl ? (
          <Image
            src={listing.imgUrl}
            alt={`${listing.company} Logo`}
            width={88}
            height={88}
            className="rounded-full select-none"
            priority
          />
        ) : (
          <MockLogo companyName={listing.company} />
        )}
        <div className="w-full">
          <div className="flex md:flex-row flex-col-reverse md:items-center justify-between">
            <h1 className="text-3xl md:text-4xl text-userVeryDarkGrayishCyan font-bold">
              {listing.company}
            </h1>
            <p className="md:text-lg md:px-4 md:py-1 text-userDesaturatedDarkCyan font-bold">
              {parsePermanency(listing.permanency)}
            </p>
          </div>
          <h2 className="text-xl md:text-2xl text-userVeryDarkGrayishCyan">
            {listing.title}
          </h2>
          <p>{listing.location}</p>
        </div>
      </div>
      <div className="md:pl-[102px] mt-8 md:mt-4">
        <p className="text-userDarkGrayishCyan text-lg">
          {loremIpsum({
            count: 8,
            units: "paragraphs",
            sentenceLowerBound: 4,
            sentenceUpperBound: 8,
          })}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-8">
          {listing.tags.map((tag) => (
            <span
              key={tag}
              className="bg-userDarkGrayishCyan text-white flex items-center justify-center px-3 pt-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
