import PurchaseTable from "@/components/modules/Dashboard/Purchases/PurchaseTable";
import DashHeading from "@/components/ui/DashHeading";
import { getCurrentUser } from "@/services/AuthService";
import { getAllSales } from "@/services/SalesService";
import { IUser } from "@/types";
import React from "react";

const PurchasePage = async () => {
  const user: IUser = await getCurrentUser();
  const { data } = await getAllSales(user.id);

  return (
    <div>
      <DashHeading>My Sales</DashHeading>

      <PurchaseTable data={data} />
    </div>
  );
};

export default PurchasePage;
