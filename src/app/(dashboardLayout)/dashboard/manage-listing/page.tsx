export const dynamic = "force-dynamic";
import DashHeading from "@/components/ui/DashHeading";
import { getListingsOfUser } from "@/services/ListingService";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import ListingTable from "@/components/modules/Dashboard/Products/ListingTable";

import { getCurrentUser } from "@/services/AuthService";
import { IUser } from "@/types";

const ManageListingPage = async () => {
  const user = (await getCurrentUser()) as IUser;
console.log(user)
  const { data } = await getListingsOfUser(user.id);

  return (
    <div>
      <DashHeading>Manage Listings</DashHeading>

      <div>
        <div className="text-right mb-4">
          <Link href={"/dashboard/add-listing"}>
            <Button variant={"default"} className="cursor-pointer">
              Add Listings <Plus className="!size-4 !text-white" />
            </Button>
          </Link>
        </div>
        <ListingTable data={data} />
      </div>
    </div>
  );
};

export default ManageListingPage;
