import React from "react";
import Logo from "../atoms/Logo";
import HamburguerButton from "../atoms/Hamburguer";
import PerfilIcon from "../atoms/Perfil";

export default function NavBar() {
    return <>
        <div className="bg-standard w-full">
            <div className="flex items-center pl-3 pr-3">
                <div className="pr-3">
                    <HamburguerButton />
                </div>
                <div className="">
                    <Logo />
                </div>
                <div className="ml-auto">
                    <PerfilIcon />
                </div>
            </div>
        </div>
    </>;
};