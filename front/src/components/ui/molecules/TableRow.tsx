'use client'

import React from "react";
import TableHead from "../atoms/TableHead";
import TableDataCell from "../atoms/TableDataCell";

export default function TableRow({ data }: any) {
    return <>
        {data.isTableHead ?
            <>
                <tr>
                    {data.rows?.map((row: any) => {
                        return <TableHead data={{ name: row }} />
                    })}
                </tr>
            </>
            :
            <>
                {data.rows?.map((row: any) => {
                    return <TableDataCell data={ row } />
                })}
            </>
        }
    </>;
};