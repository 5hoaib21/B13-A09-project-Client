'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavLink = ({href, children}) => {
  const pathName = usePathname()
  const isActive = href === pathName;
  return (
    <Link href={href} className={`${isActive ? 'tab tab-active  border-b-2 border-pink-300' : 'tab'} font-bold text-lg`}>
      {children}
    </Link>
  );
};

export default NavLink;