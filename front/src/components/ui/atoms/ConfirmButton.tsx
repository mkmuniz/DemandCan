import React from "react";

export default function ConfirmButton({ setOpen, handleSubmit }: any) {
    return <>
        <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-green-600 transition-all px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto"
            onClick={() => {
                handleSubmit()
                setOpen(false)
            }}
        >
            Confirmar
        </button>
    </>;
};