"use client";

import { IListing } from "@/types/listing";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
// import Image from "next/image";

export const columns: ColumnDef<IListing>[] = [
  {
    accessorKey: "images",
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue("images") as string[];
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
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
