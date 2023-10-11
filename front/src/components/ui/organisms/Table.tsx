'use client'

import React, { Suspense } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableSkeletonLoader from "../loaders/TableSkeletonLoader";

export default function Table() {
    return <>
        <div className="relative overflow-x-auto mt-6">
            <table className="w-full">
                <TableHead data={{ isMainTable: true }} />
                <Suspense fallback={<TableSkeletonLoader />}>
                    <TableBody />
                </Suspense>
            </table>
        </div>
    </>
};