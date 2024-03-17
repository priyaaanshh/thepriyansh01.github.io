"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Logo from '../../../assets/images/Logo.jpg'
import Image from 'next/image';

const Header = () => {
    const router = useRouter();
    const name = "Priyansh Sahu";
    return (
        <div className='flex justify-center items-center fixed top-0 w-full py-2'>
            <div className="mt-4 hidden w-max flex-wrap justify-center space-x-1 rounded-[var(--radius)] border border-muted bg-primary p-2 shadow-lg shadow-black/45 backdrop-blur-md md:flex">
                <Link href='/' className={`flex justify-center items-center rounded-full font-semibold hover:text-gray-100 md:px-4 md:text-lg bg-secondary px-4 py-2 `}>
                    <div className='text-lg font-semibold'>Home</div>
                </ Link>

                <Link href='/' className={`flex justify-center items-center rounded-full font-semibold hover:text-gray-100 md:px-4 md:text-lg px-4 py-2 `}>
                    <div className='text-lg font-semibold'>Projects</div>
                </ Link>

                <Link href='/' className={`flex justify-center items-center rounded-full font-semibold hover:text-gray-100 md:px-4 md:text-lg px-4 py-2 `}>
                    <div className='text-lg font-semibold'>Blogs</div>
                </ Link>

                <Link href='/' className={`flex justify-center items-center rounded-full font-semibold hover:text-gray-100 md:px-4 md:text-lg px-4 py-2 `}>
                    <div className='text-lg font-semibold'>Experience</div>
                </ Link>

                <Link href='/' className={`flex justify-center items-center rounded-full font-semibold hover:text-gray-100 md:px-4 md:text-lg px-4 py-2 `}>
                    <div className='text-lg font-semibold'>Contact Me</div>
                </ Link>

            </div>
        </div>
    )
}

export default Header



// < div className = 'flex lg:hidden' >
//     <Sheet>
//         <SheetTrigger asChild>
//             <Button variant="ghost" size='icon'><HamburgerMenuIcon /></Button>
//         </SheetTrigger>
//         <SheetContent>
//             <SheetHeader>
//                 <SheetClose asChild>
//                     <Link href='/' className="flex justify-center items-center rounded-full overflow-hidden">
//                         <Image src={Logo} alt='' className='size-32 object-contain rounded-full' />
//                     </Link>
//                 </SheetClose>
//                 <SheetTitle>
//                     <SheetClose asChild>
//                         <Link href='/' className='text-2xl font-semibold tracking-tight'>{name}</Link>
//                     </SheetClose>
//                 </SheetTitle>
//                 <SheetDescription>
//                     Celebrating 100 years of Ceramic Engineering IIT BHU
//                 </SheetDescription>
//             </SheetHeader>
//             <div className="flex flex-col gap-3 mt-5">
//                 <SheetClose asChild>
//                     <Link href='/' className="cursor-pointer hover:bg-primary hover:dark:text-secondary rounded-lg duration-300 px-4 py-2" >Home</Link>
//                 </SheetClose>
//             </div>
//         </SheetContent>
//     </Sheet>
//             </div >