import { IListing } from "./listing";
import { IUser } from "./user";

export interface ITransaction {
  buyerID: IUser;
  sellerID: IUser;
  itemID: IListing;
  status: "pending" | "completed";
}
