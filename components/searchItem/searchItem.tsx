import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "react-feather";

export default function SearchItem({ permalink, title, closeSearch, add }) {
  const [over, setOver] = useState(false);

  const handleClick = () => {
    closeSearch();
    add({ permalink, title });
  };

  return (
    <Link href={`/download/${permalink}`} passHref key={permalink}>
      <a
        key={title}
        className="hover:bg-white p-4 rounded flex justify-between items-center"
        onClick={handleClick}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        <p>{title}</p>
        {over && <ArrowRight className="opacity-25" />}
      </a>
    </Link>
  );
}
