import React from 'react';
import {ReactNode} from 'react';
import {Wrapper} from './styles';

export const Heading = ({children}: {children: ReactNode}) => (
  <div className="font-bold text-3xl my-5 w-full text-center ">{children}</div>
);
