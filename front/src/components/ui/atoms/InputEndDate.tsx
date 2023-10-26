import React from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function InputEndDate({ values, setValues }: any) {
    return <>
        <div className="mt-6">
            <Datepicker
                inputClassName="w-full border-x border-y border-white text-white placeholder-white text-sm rounded-lg p-2.5 bg-black"
                placeholder={"Selecione a data final"}
                value={values?.startDate}
                onChange={(e: any) => setValues({ ...values, endDate: e.target.value })}
                useRange={false}
                displayFormat='DD-MM-YYYY' />
        </div>
    </>;
};