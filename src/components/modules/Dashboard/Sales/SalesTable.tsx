"use client";

import { DataTable } from "@/components/ui/core/data-table";
import { ITransaction } from "@/types/transaction";
import { getSalesColumns } from "./SalesTableColumn";

const PurchaseTable = ({ data }: { data: ITransaction[] }) => {
  const columns = getSalesColumns();
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PurchaseTable;
