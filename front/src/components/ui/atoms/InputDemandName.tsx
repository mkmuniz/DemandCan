import React from "react";

export default function InputDemandName() {
    return <>
        <div>
            <label htmlFor="demand_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="demand_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 bg-standard w-full" placeholder="Name" required />
        </div>
    </>;
};