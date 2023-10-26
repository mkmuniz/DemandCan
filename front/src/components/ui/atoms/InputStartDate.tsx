import React from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function InputStartDate({ values, setValues }: any) {
    return <>
        <div>
            <Datepicker
                inputClassName="w-full border-x border-y border-white text-white placeholder-white text-sm rounded-lg p-2.5 bg-black"
                placeholder={"Selecione a data inicial"}
                value={values?.startDate}
                onChange={(e: any) => setValues({ ...values, startDate: e.target.value })}
                useRange={false}
                displayFormat='DD-MM-YYYY' />
        </div>
    </>;
};