import React from 'react';
import {Menu, Search, Hexagon, Sun} from 'react-feather';

export default function TopBar() {
  return (
    <div className="h-20 bg-white w-full border-b flex items-center justify-between px-6 fixed">
      <div className="flex items-center space-x-5">
        <div className="flex items-center justify-center">
          <p className="hidden sm:block font-bold sm:text-xl md:text-2xl">
            Series
          </p>
          <Hexagon height={40} width={40} strokeWidth={2} />
        </div>
        <button className="w-[28rem] h-12 rounded-full bg-gray-200 hidden hover:bg-slate-200 sm:flex items-center justify-start space-x-4 pl-4">
          <Search opacity={0.4} />
          <p className="opacity-40 font-semibold text-lg">Search</p>
        </button>
      </div>

      <div className="flex items-center justify-between space-x-3">
        <button className="h-12 px-5  rounded hover:bg-gray-100 hidden lg:flex items-center justify-center">
          Explore
        </button>
        <button className="h-12 px-5 rounded hover:bg-gray-100 hidden  md:flex items-center justify-center">
          Trailers
        </button>
        <button className="w-12 h-12  flex items-center justify-center hover:bg-gray-100 rounded">
          <Sun />
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center sm:hidden">
          <Search />
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center sm:hidden">
          <Menu />
        </button>
      </div>
    </div>
  );
}
