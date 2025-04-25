import PurchaseTable from "@/components/modules/Dashboard/Purchases/PurchaseTable";
import SalesTable from "@/components/modules/Dashboard/Sales/SalesTable";
import DashHeading from "@/components/ui/DashHeading";
import { getCurrentUser } from "@/services/AuthService";
import { getAllSales } from "@/services/SalesService";
import { IUser } from "@/types";
import React from "react";

const PurchasePage = async () => {
  const user: IUser = await getCurrentUser();
  const { data } = await getAllSales(user.id);

  const tableData = data.flatMap((txn: any) =>
    txn.transactionInfo.map((info: any) => ({
      ...info,
      status: txn.status,
    }))
  );

  return (
    <div>
      <DashHeading>My Sales</DashHeading>

      <SalesTable data={tableData} />
    </div>
  );
};

export default PurchasePage;
