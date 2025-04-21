"use client";

import { DataTable } from "@/components/ui/core/data-table";
import { getPurchaseColumns } from "./PurchaseTableColumns";
import { ITransaction } from "@/types/transaction";

const PurchaseTable = ({ data }: { data: ITransaction[] }) => {
  const columns = getPurchaseColumns();
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PurchaseTable;
