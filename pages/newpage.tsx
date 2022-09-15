import React, { ReactElement } from 'react'

export default function NewPage() {
    //  Top level navigation
    return 
    <div className='h-20 bg-white w-full border-b flex items-center justify-between px-6'>
        <div className='w-12 h-12 rounded-lg bg-gray-200'>

        </div>
        <div className='flex items-center justify-between space-x-3'>
        <div className='w-12 h-12 rounded-full bg-gray-200'>

        </div>        
        <div className='w-12 h-12 rounded-full bg-gray-200'>
        </div>        
        <div className='w-12 h-12 rounded-full bg-gray-200'>

    </div>        

        </div>
    </div>
}





NewPage.getLayout = function getLayout(page: ReactElement) {
    return page;
  };