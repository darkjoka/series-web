import React from 'react';

const Content = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col space-y-4 px-3 sm:flex-row sm:flex-wrap sm:space-x-5 sm:space-y-5 justify-center lg:max-w-[100rem]">
        {children}
      </div>
    </div>
  );
};

export default Content;
