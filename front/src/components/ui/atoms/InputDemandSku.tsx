import React from "react";

export default function InputDemandSku() {
    return <>
        <div>
            <label htmlFor="sku" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SKU number</label>
            <input type="text" id="sku" className="border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 bg-standard w-full" placeholder="SKU" required />
        </div>
    </>;
};