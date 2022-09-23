import {a, useSpring} from '@react-spring/web';
import React, {ReactNode, useState} from 'react';
import {ChevronDown} from 'react-feather';

export default function Accordion(props: {children: ReactNode; title: string}) {
  const {children, title} = props;
  const [isOpen, setOpen] = useState(false);
  const {height, opacity} = useSpring({
    from: {height: 0, opacity: 0},
    to: {height: isOpen ? 384 : 0, opacity: isOpen ? 1 : 0},
  });
  return (
    <div>
      <a.button
        className="w-full h-12 rounded-lg rounded-b-none border bg-gray-50 hover:bg-gray-100 flex items-center px-2 justify-between"
        style={{
          borderBottomRightRadius: height.to({range: [0, 384], output: [8, 0]}),
          borderBottomLeftRadius: height.to({range: [0, 96], output: [8, 0]}),
        }}
        onClick={() => setOpen(!isOpen)}
      >
        <p>{title}</p>
        <ChevronDown
          className={`${
            isOpen && 'rotate-180'
          } transition-all ease-in-out duration-500`}
        />
      </a.button>
      {/* Accordion body */}
      <a.div
        className="w-full border bg-white border-t-0 rounded-b-lg overflow-auto px-6 divide-y"
        style={{
          height,
          opacity: opacity.to({range: [0, 0.01], output: [0, 1]}),
        }}
      >
        {children}
      </a.div>
    </div>
  );
}
