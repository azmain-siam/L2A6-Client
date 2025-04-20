"use client";
import { getListingColumns } from "./TableColumns";
import { DataTable } from "@/components/ui/core/data-table";
import { deleteListing } from "@/services/ListingService";
import { IListing } from "@/types/listing";
import { toast } from "sonner";

const ListingTable = ({ data }: { data: IListing[] }) => {
  const handleDelete = async (id: string) => {
    try {
      // const res = await axios.delete(
      //   `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`
      // );

      const res = await deleteListing(id);

      if (res === 204) {
        toast.success("Product deleted!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = getListingColumns({
    onDelete: handleDelete,
  });

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ListingTable;
