import { DataTable } from "@/components/ui/core/data-table";
import DashHeading from "@/components/ui/DashHeading";
import { getListings } from "@/services/ListingService";
import React from "react";
import { columns } from "@/components/modules/Products/TableColumns";

const ManageListingPage = async () => {
  const { data } = await getListings();

  return (
    <div>
      <DashHeading>Manage Listings</DashHeading>

      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ManageListingPage;
