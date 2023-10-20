'use client'

import React, { useState } from "react";

export default function HamburguerButton({ getSideNavBarStatus }: any) {
    const [isOpen, setIsOpen] = useState(false);

    getSideNavBarStatus(isOpen);

    const hamburgerClassLine = `h-1 w-6 my-1 rounded-full bg-custom-orange transition ease transform duration-300`;

    return <>
        <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`${hamburgerClassLine} ${isOpen
                        ? "rotate-45 translate-y-3 "
                        : ""
                    }`}
            />
            <div
                className={`${hamburgerClassLine} ${isOpen ? "opacity-0" : ""
                    }`}
            />
            <div
                className={`${hamburgerClassLine} ${isOpen
                        ? "-rotate-45 -translate-y-3"
                        : ""
                    }`}
            />
        </button>
    </>
};