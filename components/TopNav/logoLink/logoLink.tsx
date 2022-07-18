import Link from 'next/link';
import React from 'react';

const LogoLink = () => {
  return (
    <Link href="/" passHref>
      <a className="font-bold text-3xl">SeriesB</a>
    </Link>
  );
};

export default LogoLink;
