'use client'

import React from "react";
import TableRow from "../molecules/TableRow";

export default function TableBody() {
    return <>
        <tbody>
            <TableRow data={{ isTableHead: false, rows: [] }} />
        </tbody>
    </>
};