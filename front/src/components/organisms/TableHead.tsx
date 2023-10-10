'use client'

import React from "react";
import TableRow from "../molecules/TableRow";

export default function TableHead({ data }: any) {
    const mainColumns = ['EDITAR', 'PERÍODO', 'SKUs', 'TOTAL PLAN (TONS)', 'TOTAL PROD. (TONS)', 'STATUS'];
    const editColumns = ['SKU', 'DESCRIÇÃO', 'TOTAL PLAN'];

    return <>
        <thead className="bg-gray-300">
            {data.isMainTable ? <TableRow data={{ rows: mainColumns, isTableHead: true }} /> : <TableRow data={{ rows: editColumns, isTableHead: true }} />}
        </thead>
    </>;
};