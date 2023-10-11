import React from "react";

export default function TableDataCell({ data }: any) {    
    return <>
        <tr>
            <td className="px-4 py-2 text-black"></td>
            <td className="px-4 py-2 text-black">{data.description}</td>
            <td className="px-4 py-2 text-black">{data.sku}</td>
            <td className="px-4 py-2 text-black"></td>
            <td className="px-4 py-2 text-black"></td>
            <td className="px-4 py-2 text-black">{data.status}</td>
        </tr>
    </>;
};