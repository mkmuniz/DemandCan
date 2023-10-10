'use client'

import React from "react";
import TableHead from "../atoms/TableHead";
import TableDataCell from "../atoms/TableDataCell";

export default function TableRow({ data }: any) {
    return <>
        <tr>
            {data.isTableHead ?
                <>
                    {data.rows.map((row: any) => {
                        return <TableHead data={{ name: row }} />
                    })}
                </>
                :
                <>
                    {data.rows.map((row: any) => {
                        return <TableDataCell data={{ name: row }} />
                    })}
                </>
            }
        </tr>
    </>;
};