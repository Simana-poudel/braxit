import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <div>
      <DropdownMenu>
         <DropdownMenuTrigger>
         <Image 
            src='/icons/menu.png'
            width={36}
            height={36}
            alt="Menu Icon"
            />
         </DropdownMenuTrigger>
          <DropdownMenuContent className='w-screen	'>
           <Link href='/'>
            <DropdownMenuLabel>
            Home
            </DropdownMenuLabel>
           </Link>
           <DropdownMenuSeparator />
           <Link href='/about'>
            <DropdownMenuLabel>
            About
            </DropdownMenuLabel>
           </Link>
           <DropdownMenuSeparator />
           <Link href='/services'>
            <DropdownMenuLabel>
            Services
            </DropdownMenuLabel>
           </Link>
           <DropdownMenuSeparator />
           <Link href='/project'>
            <DropdownMenuLabel>
            Project
            </DropdownMenuLabel>
           </Link>
           <DropdownMenuSeparator />
           <Link href='/blog'>
            <DropdownMenuLabel>
            Blog
            </DropdownMenuLabel>
           </Link>
           <DropdownMenuSeparator /><Link href='/page'>
            <DropdownMenuLabel>
            Page
            </DropdownMenuLabel>
           </Link>
           <DropdownMenuSeparator /><Link href='/'>
            <DropdownMenuLabel>
            Home
            </DropdownMenuLabel>
           </Link>
           <DropdownMenuSeparator /><Link href='/contact'>
            <DropdownMenuLabel>
            Contact
            </DropdownMenuLabel>
           </Link>
           <DropdownMenuSeparator />
         </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Menu;