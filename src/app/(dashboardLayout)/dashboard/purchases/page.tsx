import PurchaseTable from "@/components/modules/Dashboard/Purchases/PurchaseTable";
import DashHeading from "@/components/ui/DashHeading";
import { getCurrentUser } from "@/services/AuthService";
import { getAllPurchases } from "@/services/PurchaseService";
import { IUser } from "@/types";
import React from "react";

const PurchasePage = async () => {
  const user: IUser = await getCurrentUser();
  const { data } = await getAllPurchases(user.id);
  
  return (
    <div>
      <DashHeading>My Purchases</DashHeading>

      <PurchaseTable data={data} />
    </div>
  );
};

export default PurchasePage;
