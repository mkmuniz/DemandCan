'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburguerButton({ getSideNavBarStatus }: any) {
    const [isOpen, setOpenSideBar] = useState(false);

    getSideNavBarStatus(isOpen);

    return <>
        <Link href='/' className="text-custom-orange" onClick={() => {
            if (!isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            };
            setOpenSideBar(!isOpen)
        }}
            scroll={isOpen}
        >
            <IconContext.Provider value={{ size: '20px' }}>
                <GiHamburgerMenu />
            </IconContext.Provider>
        </Link>
    </>
};