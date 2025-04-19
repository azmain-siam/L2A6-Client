export interface IListing {
  title: string;
  description: string;
  price: number;
  condition: string;
  images?: string[];
  userId: string;
  status: "available" | "sold";
}

