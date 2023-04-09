
import {Bars3Icon} from '@heroicons/react/24/solid';
import Link from 'next/link';
import NavLink from './NavLinks';
import SearchBox from './SearchBox';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  return (
    <header>
    <div className='grid grid-cols-3 items-center p-10'>
        <Bars3Icon className='h-8 w-8 cursor-pointer'/>
        <Link href='\' prefetch={false}>
            <h1 className='font-serif text-4xl text-center'>
                The{" "}
                <span className='underline decoration-6 decoration-orange-400'>DAILY </span>{' '}
                News
                </h1>
        </Link>
        <div className='flex items-center justify-end space-x-2'>
            <DarkModeButton/>
           
        </div>
    </div>
    <NavLink/>
    <SearchBox/>
    </header>
  )
}

export default Header