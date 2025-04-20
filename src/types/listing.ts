export interface IListing {
  _id: string;
  title: string;
  description: string;
  price: string;
  condition: string;
  images?: string[];
  userId: string;
  status: "available" | "sold";
}
