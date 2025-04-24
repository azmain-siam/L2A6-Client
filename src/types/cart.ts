import { IListing } from "./listing";

export interface ICart {
  user: string;
  items: IListing[];
}
