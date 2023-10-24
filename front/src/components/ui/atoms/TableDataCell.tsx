import React from "react";

export default function TableDataCell({ data }: any) {    
    return <>
        <tr>
            <td className="px-4 py-2 text-black"></td>
            <td className="px-4 py-2 text-black"></td>
            <td className="px-4 py-2 text-black">{data.sku}</td>
            <td className="px-4 py-2 text-black"></td>
            <td className="px-4 py-2 text-black"></td>
            <td className={`px-4 py-2 text-black ${data.status === 'OPEN' ? 'bg-blue-500' : ''} ${data.status === 'CLOSED' ? 'bg-green-500' : ''}`}>{data.status}</td>
        </tr>
    </>;
};