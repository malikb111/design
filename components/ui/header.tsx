"use client";

import { Button } from "@/components/ui/button";
import { Menu, MoveRight, X, Globe } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header1() {
    const navigationItems = [
        {
            title: "Services",
            href: "/services"
        },
        {
            title: "Société",
            href: "/societe"
        }
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <Link href="/" className="mr-4">
                        <Image 
                            src="/logo_sati.svg"
                            alt="Logo Sati"
                            width={165}
                            height={62}
                            priority
                        />
                    </Link>
                    <nav className="flex items-center gap-[30px]">
                        {navigationItems.map((item) => (
                            <Link 
                                key={item.title} 
                                href={item.href}
                                className="text-sm font-medium hover:underline"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex lg:justify-center">
                </div>
                <div className="flex justify-end w-full gap-[30px]">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="hidden md:inline-flex bg-transparent hover:bg-transparent hover:underline p-0">
                                <Globe className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="hover:underline focus:bg-transparent">
                                Français
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:underline focus:bg-transparent">
                                English
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:underline focus:bg-transparent">
                                Deutsch
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:underline focus:bg-transparent">
                                Italiano
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" className="bg-transparent hover:bg-transparent hover:underline">
                        Sign in
                    </Button>
                    <Button>Get started</Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex justify-between items-center hover:underline"
                                >
                                    <span className="text-lg">{item.title}</span>
                                    <MoveRight className="w-4 h-4 stroke-1" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };