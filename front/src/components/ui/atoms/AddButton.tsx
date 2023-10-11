import Link from "next/link";
import React from "react";

export default function AddButton() {
    return <>
        <Link className="bg-custom-orange p-4 rounded text-white" href="">
            + ADICIONAR
        </Link>
    </>;
};