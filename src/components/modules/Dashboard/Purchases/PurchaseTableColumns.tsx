"use client";

import { Badge } from "@/components/ui/badge";
import { ITransaction } from "@/types/transaction";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// type ListingColumnProps = {
//   onDelete: (id: string) => void;
//   // onEdit: (listing: IListing) => void;
// };

export const getPurchaseColumns = (): ColumnDef<ITransaction>[] => [
  {
    accessorKey: "itemID.images",
    header: "Product Image",
    cell: ({ row }) => {
      const image = row.original.itemID.images as string[];
      return (
        <div className="size-12 overflow-hidden rounded-md ">
          <Image
            src={image[0]}
            alt="image"
            height={50}
            width={50}
            className="w-full h-full object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "itemID.title",
    header: "Title",
  },
  {
    accessorKey: "sellerID.name",
    header: "Seller",
  },
  {
    accessorKey: "sellerID.email",
    header: "Seller Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div>
          <Badge
            variant={row.original.status === "pending" ? "yellow" : "green"}
            className="capitalize font-normal"
          >
            {row.original.status}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "itemID.price",
    header: "Price",
    cell: ({ row }) => {
      return <div>৳ {parseFloat(row.original.itemID.price).toFixed(2)}</div>;
    },
  },
];
