import React, { ReactElement } from 'react'

export default function Card(){
    return <div className='py-10 px-1 sm:px-10'>
{/* actual card starts from here */}
<a className='inline-block'>
<div className='w-full h-48 border rounded-lg bg-white hover:bg-gray-50 active:bg-gray-100 flex p-2 space-x-2 sm:w-72 sm:flex-col sm:space-x-0 sm:h-auto sm:space-y-2 hover:pointer'>
    <div className='h-full w-32 bg-gray-200 rounded-md sm:w-full sm:h-44'>
    </div>

    <div className='flex-1 flex-col space-y-3 sm:space-y-1'>

  <div className='h-12'>
        <p className='line-clamp-2 font-bold text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, quam!</p>
  </div>
<div className='h-20'>
        <p className='line-clamp-4 font-semibold text-slate-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis deleniti laborum dolor recusandae? Omnis, numquam sed? Ea suscipit voluptates molestias repellat vitae consectetur facere labore in, nam dignissimos magnam ipsam ipsa quia asperiores, molestiae nostrum sed! Totam, accusantium doloremque.</p>
</div>

    <div className='h-6'>
        <p className='flex-row-reverse font-bold flex'>10.0</p>
    </div>
    
    </div>
</div>
</a>

    </div>
}

Card.getLayout = function getLayout(page: ReactElement) {
    return page;
  };