import React from "react";
import DemandTableTitle from "../atoms/DemandTableTitle";
import AddButton from "../atoms/AddButton";
import Table from "./Table";
import Modal from "./Modal";

export default function TableHome() {
    return <>
        <div className="w-full">
            <div className="mt-6 mb-6">
                <DemandTableTitle />
            </div>
            <div>
                <Modal />
            </div>
            <Table />
        </div>
    </>;
};