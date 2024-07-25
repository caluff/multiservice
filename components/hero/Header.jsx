import React from 'react';
import Link from "next/link"

const Header = ({user}) => {

  return (
    <div
      className={'sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'}>
      <div className={'max-w-7xl mx-auto'}>
        <div className={'py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'}>
          <div className={'relative flex items-center justify-between'}>
            <Link href={'/'} className={'flex dark:text-slate-200 font-bold items-center text-slate-900'}>
              <h3 className={'ml-4'}>Textony.com</h3>
            </Link>
            <div className={'flex space-x-4 items-center '}>
              <nav className={'text-sm leading-6 font-semibold text-slate-900 dark:text-slate-300'}>
                <ul className={'flex space-x-6'}>
                  <li>
                    {user
                      ? <Link href={'/auth/logout'} className={'link-button'}>Sign out</Link>
                      : <Link href={'/auth/login'} className={'link-button'}>Login</Link>
                    }
                  </li>
                </ul>
              </nav>
              <div className={'border-l border-slate-200 pl-4 dark:border-slate-800 flex items-center space-x-2'}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
