import React from "react";

export default function TableDataCell({ data }: any) {
    return <>
        <td className="px-4 py-2 text-emerald-600">{data.name}</td>
    </>;
};