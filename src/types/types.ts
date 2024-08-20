export type PermanencyType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "INTERNSHIP";

interface JobListing {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  permanency: PermanencyType;
  featured: boolean;
  tags: string[];
  imgUrl: string;
  createdAt: Date;
}

export default JobListing;
