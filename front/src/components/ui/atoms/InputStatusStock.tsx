import React from "react";

export default function InputStatusStock({ values, setValues }: any) {
    return <>
        <select id="countries" onChange={(e: any) => setValues({ ...values, status: e.target.value })} className=" border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 bg-black mt-6">
            <option selected>Selecione um status</option>
            <option value="CANCELLED">PLANEJAMENTO</option>
            <option value="OPEN">EM ANDAMENTO</option>
            <option value="FINISHED">COMPLETO</option>
        </select>
    </>;
};