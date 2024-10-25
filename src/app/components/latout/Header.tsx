import Link from 'next/link';
import React from 'react';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle, // Import SheetTitle
    SheetClose // Optional: If you want to provide a close button
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className='flex justify-between px-10 py-6 bg-slate-500 items-center max-w-screen-2xl mx-auto'>
        <div>
            <h4 className='text-5xl font-sans text-white font-bold'>Logo</h4>
        </div>
        <ul className='hidden md:block space-x-6 items-center text-white text-[23px] font-semibold'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
        </ul>
        <Sheet>
            <SheetTrigger className='md:hidden'>
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>Menu</SheetTitle> {/* Add SheetTitle for accessibility */}
                <ul className='space-y-4'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
                {/* Optional: Add a close button */}
                <SheetClose className="mt-4">Close</SheetClose>
            </SheetContent>
        </Sheet>
    </header>
  )
}

export default Header;