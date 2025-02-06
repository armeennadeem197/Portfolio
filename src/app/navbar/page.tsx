"use client"; // Make this a Client Component

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from 'react-icons/md'; // Correct import for a menu icon

function Navbar() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Project" },
    { href: "/skill", label: "Skill" },
    { href: "/contact", label: "Contact" },
  ]; // Define navItems as an array of objects

  return (
    <div className='bg-black'>
      <div className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              className="object-cover object-center rounded-full"
              alt="Armeen Nadeem"
              src="/images 111.jpg" // Ensure your image path is correct
              height={70}
              width={50}
            />
            <span className="ml-3 text-2xl text-white font-bold">Armeen Nadeem</span>
          </a>
          <nav className="md:ml-auto flex-wrap items-center text-base justify-center hidden md:block">
            {navItems.map(({ href, label }) => (
              <Link 
                key={label}
                href={href} 
                className="mr-5 hover:text-purple-500 text-2xl"
                aria-label={`Go to ${label} page`} // Corrected the template string syntax
              >
                {label}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger className="text-white text-3xl flex items-center mr-1 md:hidden ">
              <MdMenu /> {/* Use MdMenu for the menu icon */}
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col ">
                {navItems.map(({ href, label }) => ( // Correctly mapping navItems for mobile
                  <Link 
                    key={label}
                    href={href} 
                    className="mb-2 hover:text-purple-500  text-xl"
                    aria-label={`Go to ${label} page`} // Corrected the template string syntax
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
