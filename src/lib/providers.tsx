'use client';

import React from 'react';
import {SessionProvider} from 'next-auth/react';
import {ToastContainer} from 'react-toastify';

interface IProps {
  children: React.ReactNode;
}

const Providers = (props: IProps) => {
  const {children} = props;

  return (
    <SessionProvider>
      <ToastContainer autoClose={3000} />
      {children}
    </SessionProvider>
  );
};

export default Providers;
