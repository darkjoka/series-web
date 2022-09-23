import React from 'react';
import {Menu, Search, Hexagon, Sun} from 'react-feather';
import useSide from '../../store/useSide';
import useSearch from '../../store/useSearch';
import Link from 'next/link';

export default function TopBar() {
  const {openSide} = useSide();
  const {openSearch} = useSearch();

  return (
    <div className="h-20 bg-white w-full border-b flex items-center justify-between px-6 fixed">
      <div className="flex items-center space-x-5">
        <Link href={'/'} passHref>
          <a className="flex items-center justify-center">
            <p className="hidden sm:block font-bold sm:text-xl md:text-2xl">
              Series
            </p>
            <Hexagon height={40} width={40} strokeWidth={2} />
          </a>
        </Link>
        <button
          onClick={openSearch}
          className="w-[28rem] h-12 rounded-full bg-gray-200 hidden hover:bg-slate-200 sm:flex items-center justify-start space-x-4 pl-4"
        >
          <Search opacity={0.4} />
          <p className="opacity-40 font-semibold text-lg">Search</p>
        </button>
      </div>

      <div className="flex items-center justify-between space-x-3">
        <Link href={'/'} passHref>
          <a className="h-12 px-5  rounded hover:bg-gray-100 hidden lg:flex items-center justify-center">
            Explore
          </a>
        </Link>
        <Link href={'/trailers'} passHref>
          <a className="h-12 px-5 rounded hover:bg-gray-100 hidden  md:flex items-center justify-center">
            Trailers
          </a>
        </Link>
        <button className="w-12 h-12  flex items-center justify-center hover:bg-gray-100 rounded">
          <Sun />
        </button>
        <button
          onClick={openSearch}
          className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center sm:hidden"
        >
          <Search />
        </button>
        <button
          onClick={openSide}
          className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center sm:hidden"
        >
          <Menu />
        </button>
      </div>
    </div>
  );
}
