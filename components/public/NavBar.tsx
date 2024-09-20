'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className='fixed left-0 top-0 h-full w-full sm:w-64 bg-primary shadow-md z-50 flex flex-col sm:justify-center items-center py-4'>
      <h1 className='py-4 font-bold underline'>YI LI</h1>
      {/* Headshot */}
      <div className='mb-8 hidden sm:block'>
        <Avatar className='size-24'>
          <AvatarImage src='/images/yl.png' />
          <AvatarFallback>YL</AvatarFallback>
        </Avatar>
      </div>

      {/* Desktop Menu */}
      <div className='hidden sm:block'>
        <NavigationMenu>
          <NavigationMenuList className='text-white flex flex-col space-y-4'>
            <NavigationMenuItem>
              <Link href='#about' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  ABOUT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#education' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  EDUCATION
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#expertise' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  EXPERTISE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='#experience' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  EXPERIENCE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='#projects' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  PROJECTS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#interests' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  INTEREST
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='sm:hidden absolute left-4 top-4 z-60'>
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          className='text-white focus:outline-none'
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavigationMenu className='sm:hidden absolute left-0 top-12 w-full h-auto bg-primary shadow-lg z-40 flex justify-center items-center rounded-lg'>
          <NavigationMenuList className='flex flex-col text-white space-y-4 p-8'>
            <NavigationMenuItem>
              <Link href='#about' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  ABOUT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#education' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  EDUCATION
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#expertise' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  EXPERTISE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#project' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  PROJECT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='#interests' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  INTERESTS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </aside>
  );
}
