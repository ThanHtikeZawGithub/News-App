'use client'

import {usePathname} from 'next/navigation';
import { categories } from '../constants';
import NavLink from './NavLink';

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  }
  return (
    <nav className='grid grid-cols-4 text-sm md:grid-cols-7 md:text-lg pb-10 mx-auto max-w-6xl border-b gap-4'>
        {categories.map(category => (
           <NavLink key={category} category={category} isActive={isActive(category)} />
        ))}
    </nav>
  )
}

export default NavLinks