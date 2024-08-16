interface JobListing {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  permanency: string;
  featured: boolean;
  tags: string[];
  imgUrl: string;
  createdAt: Date;
}

export default JobListing;
