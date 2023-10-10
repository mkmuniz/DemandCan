import React from "react";

export default function TableHead({ data }: any) {
    return <>
        <th className="px-4 py-2 text-custom-gray-darker">{data.name}</th>
    </>
};