'use client'

import React, { useState } from "react";
import Logo from "../atoms/Logo";
import HamburguerButton from "../atoms/Hamburguer";
import PerfilIcon from "../atoms/Perfil";
import SideNavBar from "../molecules/SideNavBar";

export default function NavBar() {
    const [isOpen, setStatus] = useState(false);

    const getSideNavBarStatus = (value: any) => {
        setStatus(value);
    };

    return <>
        <div className="bg-standard w-full">
            <div className="flex items-center pl-3 pr-3">
                <div className="pr-3">
                    <HamburguerButton getSideNavBarStatus={getSideNavBarStatus} />
                </div>
                <div className="">
                    <Logo />
                </div>
                <div className="ml-auto">
                    <PerfilIcon />
                </div>
            </div>
        </div>
        <SideNavBar isOpen={isOpen} />
    </>;
};