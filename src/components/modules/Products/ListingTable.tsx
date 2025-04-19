"use client";
import { getListingColumns } from "./TableColumns";
import { DataTable } from "@/components/ui/core/data-table";
import useAxios from "@/hooks/globalAxiosURL";
import { IListing } from "@/types/listing";
import { toast } from "sonner";

const ListingTable = ({ data }: { data: IListing[] }) => {
  const axios = useAxios();
  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`
      );

      if (res.status === 204) {
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
