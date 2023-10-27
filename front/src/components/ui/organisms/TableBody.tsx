'use client'

import React, { Suspense } from "react";
import TableRow from "../molecules/TableRow";
import { useQuery } from "@tanstack/react-query";
import { getAllStocks } from "@/api/stocks";

export default function TableBody() {
    const { data } = useQuery({ queryKey: ['stocks'], queryFn: getAllStocks, suspense: true })

    return <>
        <tbody>
            <TableRow data={{ isTableHead: false, rows: data }} />
        </tbody>
    </>
};