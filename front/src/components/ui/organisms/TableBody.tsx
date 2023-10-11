'use client'

import React, { Suspense } from "react";
import TableRow from "../molecules/TableRow";
import { useQuery } from "@tanstack/react-query";
import { getAllDemands } from "@/api/demands";
import TableSkeletonLoader from "../loaders/TableSkeletonLoader";

export default function TableBody() {
    const { data } = useQuery({ queryKey: ['demands'], queryFn: getAllDemands, suspense: true })

    return <>
        <tbody>
                <TableRow data={{ isTableHead: false, rows: data }} />
        </tbody>
    </>
};