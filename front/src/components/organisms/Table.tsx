'use client'

import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table() {
    return <>
        <div className="relative overflow-x-auto mt-6">
            <table className="w-full">
                <TableHead data={{ isMainTable: true }} />
                <TableBody />
            </table>
        </div>
    </>
};