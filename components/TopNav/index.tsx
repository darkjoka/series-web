import React from 'react';
import Link from 'next/link';
import {Menu} from 'react-feather';
import TopNavProps from './TopNav.type';
import ThemeToggle from './themeToggle';
import LogoLink from './logoLink';
import NavigationLink from './navigationLink';

const navigationLinks = [
  {to: '/', linkName: 'Home'},
  {to: '/trailers', linkName: 'Trailers'},
  {to: '/filter/actiion', linkName: 'Action'},
  {to: '/fiilter/fantasy', linkName: 'Fantasy'},
  {to: '/filter/romance', linkName: 'Romance'},
];

export const TopNav = ({handler, ...themeProps}: TopNavProps) => {
  return (
    <div className="h-16 w-full px-2 shadow-sm md:px-4 xl:px-8 flex align-center justify-center">
      <div className="w-full h-full flex items-center justify-between 2xl:max-w-[90rem]">
        <div className="h-full grid place-items-center 3xl:hidden">
          <button onClick={handler} className="p-1">
            <Menu />
          </button>
        </div>
        <LogoLink />
        <div className="hidden space-x-4 3xl:block">
          {navigationLinks.map(navigationLink => (
            <NavigationLink {...navigationLink} />
          ))}
        </div>
        <ThemeToggle {...themeProps} />
      </div>
    </div>
  );
};
