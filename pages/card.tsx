import React, { ReactElement } from 'react'

export default function Card(){
    return <div className='py-10 px-1 sm:px-10'>
{/* actual card starts from here */}
<a className='inline-block'>
<div className='w-full h-48 border rounded-lg bg-white hover:bg-gray-50 active:bg-gray-100 flex p-2 space-x-2 sm:w-72 sm:flex-col sm:space-x-0 sm:h-auto sm:space-y-2 hover:pointer'>
    <div className='h-full w-32 bg-gray-200 rounded-md sm:w-full sm:h-44'>
    </div>
    {/* fix space between problem */}
    <div className='flex-1 flex-col sm:space-y-1'>
  {/* provide enough spacing for single and multine title as well as teasers which do not use all of the line cap */}
        <p className='line-clamp-2 font-bold text'>Lorem ipsum dolor</p>

        <p className='line-clamp-4 font-semibold text-slate-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, repellendus nulla ullam repellat aliquid vero deleniti sit ratione tenetur optio obcaecati consequatur labore fuga nihil maxime sint distinctio animi modi sunt velit. Est dolore earum adipisci in, explicabo porro expedita quia distinctio odio vero aliquam corrupti veritatis quisquam. Quis deleniti quas praesentium earum nulla vero. Hic molestias harum nisi? Praesentium fuga nesciunt impedit quia, voluptatum facere modi atque aut necessitatibus illo iusto eaque, fugit aperiam nam expedita saepe ab corporis quibusdam laborum, eum explicabo earum error. Aliquam voluptate rem voluptas laborum cumque labore, repellendus quibusdam tempore. A nostrum est quisquam!</p>

    
        <p className='flex-row-reverse font-bold flex'>10.0</p>
    
    </div>
</div>
</a>

    </div>
}

Card.getLayout = function getLayout(page: ReactElement) {
    return page;
  };