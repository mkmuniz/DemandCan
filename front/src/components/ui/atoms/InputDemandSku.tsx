import React from "react";

export default function InputDemandSku({ values, setValues }: any) {
    return <>
        <div>
            <label htmlFor="sku" className="block mb-2 text-sm font-medium text-white">SKU number</label>
            <input type="text" id="sku" className="border border-gray-300 text-sm rounded-lg block p-2.5 bg-standard w-full text-white" onChange={(e: any) => setValues({...values, sku: e.target.value })} placeholder="SKU" required />
        </div>
    </>;
};