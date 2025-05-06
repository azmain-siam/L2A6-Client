import { IListing } from "./listing";
import { IUser } from "./user";

export interface ITransaction {
  buyerID: IUser;
  sellerID: IUser;
  itemID: IListing;
  status: "pending" | "completed";
}

export type Transaction = {
  transactionInfo: ITransaction[];
  status: "pending" | "completed";
};
