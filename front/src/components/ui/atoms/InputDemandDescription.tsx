import React from "react";

export default function InputDemandDescription({ values, setValues }: any) {
    return <>
        <div>
            <input type="text" id="demand_description" className="border border-gray-300 text-white text-sm rounded-lg block p-2.5 bg-standard w-full" onChange={(e: any) => setValues({...values, description: e.target.value})} placeholder="Description" required />
        </div>
    </>;
};