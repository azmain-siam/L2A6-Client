/* eslint-disable @typescript-eslint/no-explicit-any */
import PurchaseTable from "@/components/modules/Dashboard/Purchases/PurchaseTable";
import DashHeading from "@/components/ui/DashHeading";
import { getCurrentUser } from "@/services/AuthService";
import { getAllPurchases } from "@/services/PurchaseService";
import { IUser } from "@/types";
import React from "react";

const PurchasePage = async () => {
  const user: IUser = await getCurrentUser();
  const { data } = await getAllPurchases(user.id);

  const tableData = data.flatMap((txn: any) =>
    txn.transactionInfo.map((info: any) => ({
      ...info,
      status: txn.status,
    }))
  );

  return (
    <div>
      <DashHeading>My Purchases</DashHeading>

      <PurchaseTable data={tableData} />
    </div>
  );
};

export default PurchasePage;
