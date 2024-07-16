import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import { plura } from "../../../../public/images";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/global/mode-toggle";

type Props = {
    user?: null | User;
};

const Navigation = (props: Props) => {
    return (
        <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
            <aside className="flex items-center gap-2">
                <Image src={plura} width={40} height={40} alt="plura logo" />
                <span className="text-xl font-bold"> Plura.</span>
            </aside>
            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <ul className=" flex items-center justify-center gap-8">
                    <li>
                        <Link href="#">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Documentation</Link>
                    </li>
                    <li>
                        <Link href="#">Features</Link>
                    </li>
                </ul>
            </nav>
            <aside className="flex gap-2 items-center">
                <Link
                    href="/agency"
                    className=" bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
                >
                    Login
                </Link>
                <UserButton />
                <ModeToggle />
            </aside>
        </div>
    );
};

export default Navigation;
