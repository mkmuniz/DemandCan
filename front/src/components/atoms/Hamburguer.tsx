'use client'

import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburguerButton() {
    return <>
        <Link href='/' className="text-custom-orange w-full">
            <IconContext.Provider value={{ size: '20px' }}>
                <GiHamburgerMenu />
            </IconContext.Provider>
        </Link>
    </>
};