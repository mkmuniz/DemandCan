import React from "react";

export default function InputDemandName({ values, setValues }: any) {
    return <>
        <div>
            <label htmlFor="demand_description" className="block mb-2 text-sm font-medium text-white">Description</label>
            <input type="text" id="demand_description" className="border border-gray-300 text-white text-sm rounded-lg block p-2.5 bg-standard w-full" onChange={(e: any) => setValues({...values, description: e.target.value})} placeholder="Name" required />
        </div>
    </>;
};