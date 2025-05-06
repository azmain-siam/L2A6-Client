import { ILoggedInUser } from "./user";

export interface IListing {
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: string;
  category: string;
  images: string[];
  userId: ILoggedInUser;
  status: "available" | "sold";
}
