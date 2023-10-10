import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburguerButton() {
    return <>
        <Link href='/' className="text-custom-orange text-3xl">
            <GiHamburgerMenu />
        </Link>
    </>
};