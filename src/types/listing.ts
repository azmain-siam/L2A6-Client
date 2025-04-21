import { IUser } from "./user";

export interface IListing {
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: string;
  images: string[];
  userId: IUser;
  status: "available" | "sold";
}
