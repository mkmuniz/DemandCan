import Link from "next/link";
import React from "react";

export default function AddButton({ setOpen }: any) {
    return <>
        <Link onClick={() => setOpen(true)} className="bg-custom-orange p-4 rounded text-white hover:bg-custom-orange-hover transition" href="">
            + ADICIONAR
        </Link>
    </>;
};