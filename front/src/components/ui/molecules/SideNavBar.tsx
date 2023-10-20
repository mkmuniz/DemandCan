import Link from "next/link";
import React from "react";

export default function SideNavBar({ isOpen }: any) {

    return <>
        <div className={`absolute h-screen z-30 ${!isOpen ? '-translate-x-full' : '-translate-x-0'} overflow-y-auto transition duration-150 ease-in-out bg-standard w-48`}>
            <ul className="m-6 space-y-1">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Help
                    </Link>
                </li>
            </ul>
        </div>
    </>;
};