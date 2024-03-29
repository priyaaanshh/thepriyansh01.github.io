"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'bg-secondary rounded-[var(--radius)] shadow-lg shadow-black/25' : 'hover:text-destructive duration-300';
    };
    return (
        <div className='z-10 flex flex-col justify-center items-center fixed top-0 w-full py-2'>
            <div className="mt-2 hidden w-max flex-wrap justify-center items-center space-x-1 rounded-[var(--radius)] shadow-lg shadow-black/30 border border-muted bg-slate-800/70 p-2 backdrop-blur md:flex">
                <Link href='/' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/')}`}>
                        Home
                    </div>
                </Link>

                <Link href='/projects' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/projects')}`}>
                        Projects
                    </div>
                </Link>

                <Link href='/experience' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/experience')}`}>
                        Experience
                    </div>
                </Link>

                <Link href='/contact' passHref>
                    <div className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive('/contact')}`}>
                        Contact Me
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header