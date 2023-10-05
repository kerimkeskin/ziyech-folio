'use client';

import React from 'react';

import {SessionProvider} from 'next-auth/react';

interface IProps {
  children: React.ReactNode;
}

const Providers = (props: IProps) => {
  const {children} = props;

  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
