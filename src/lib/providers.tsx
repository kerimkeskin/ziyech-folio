'use client';

import React from 'react';
import {SessionProvider, SessionProviderProps} from 'next-auth/react';
import {ToastContainer} from 'react-toastify';

interface IProps {
  children: React.ReactNode;
  session: SessionProviderProps['session'];
}

const Providers = (props: IProps) => {
  const {children, session} = props;

  return (
    <SessionProvider session={session}>
      <ToastContainer autoClose={3000} />
      {children}
    </SessionProvider>
  );
};

export default Providers;
