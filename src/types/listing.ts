export interface IListing {
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: string;
  images: string[];
  userId: string;
  status: "available" | "sold";
}
