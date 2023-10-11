import React from "react";
import DemandTableTitle from "../atoms/DemandTableTitle";
import AddButton from "../atoms/AddButton";
import Table from "./Table";

export default function TableHome() {
    return <>
        <div className="w-full">
            <div className="mt-6 mb-6">
                <DemandTableTitle />
            </div>
            <div>
                <AddButton />
            </div>
            <Table />
        </div>
    </>;
};