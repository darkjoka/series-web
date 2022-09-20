import React, {useState} from 'react';
import {a, useSpring} from '@react-spring/web';

export default function Accordion() {
  const [isOpen, setOpen] = useState(false);
  const {height, opacity} = useSpring({
    from: {height: 0, opacity: 0},
    to: {height: isOpen ? 384 : 0, opacity: isOpen ? 1 : 0},
  });
  return (
    <div>
      <a.div
        className="w-full h-12 rounded-lg rounded-b-none border bg-gray-50 hover:bg-gray-100"
        style={{
          borderBottomRightRadius: height.to({range: [0, 384], output: [8, 0]}),
          borderBottomLeftRadius: height.to({range: [0, 96], output: [8, 0]}),
        }}
        onClick={() => setOpen(!isOpen)}
      ></a.div>
      {/* Accordion body */}
      <a.div
        className="w-full border bg-white border-t-0 rounded-b-lg"
        style={{
          height,
          opacity: opacity.to({range: [0, 0.01], output: [0, 1]}),
        }}
      ></a.div>
    </div>
  );
}
