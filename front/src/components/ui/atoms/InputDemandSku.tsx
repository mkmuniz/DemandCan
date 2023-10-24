import React from "react";

export default function InputDemandSku({ values, setValues }: any) {
    return <>
        <div>
            <input type="text" id="sku" className="border border-gray-300 text-sm rounded-lg block p-2.5 bg-standard w-full text-white mt-6" onChange={(e: any) => setValues({...values, sku: e.target.value })} placeholder="SKU Number" required />
        </div>
    </>;
};