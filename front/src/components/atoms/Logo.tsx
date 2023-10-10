import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo(){
    return <>
        <Link href='/'>
            <Image src='/imgs/logo.png' width={75} height={75} alt="logo" />
        </Link>
    </>
};