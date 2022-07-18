import React from 'react';
import Link from 'next/link';
import {NavigationLinkProps} from './navigationLink.type';

const NavigationLink = ({to, linkName}: NavigationLinkProps) => {
  return (
    <Link href={to} passHref>
      <a className="">{linkName}</a>
    </Link>
  );
};

export default NavigationLink;
