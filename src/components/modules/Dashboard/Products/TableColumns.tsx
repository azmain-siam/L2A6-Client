"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WarningModal } from "@/components/ui/core/WarningModal";
import { IListing } from "@/types/listing";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ListingColumnProps = {
  onDelete: (id: string) => void;
  markAsSold: (id: string) => void;
  // onEdit: (listing: IListing) => void;
};

export const getListingColumns = ({
  onDelete,
  markAsSold,
}: ListingColumnProps): ColumnDef<IListing>[] => [
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
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <>
          <Badge
            className="capitalize"
            variant={status === "available" ? "green" : "default"}
          >
            {status}
          </Badge>
        </>
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Actions",
    cell: ({ row }) => {
      const listing = row.original;
      return (
        <div className="flex items-center gap-2">
          <Link href={`/dashboard/manage-listing/${listing._id}`}>
            <Edit
              className="!size-5 cursor-pointer"
              // onClick={() => onEdit(listing)}
            />
          </Link>
          <WarningModal id={listing._id} handleDelete={onDelete} />
          {listing.status === "available" && (
            <Button
              onClick={() => markAsSold(listing._id)}
              className="cursor-pointer hover:bg-gray-200 text-primary hover:text-primary"
              variant={"outline"}
            >
              Mark as sold
            </Button>
          )}
        </div>
      );
    },
  },
];
