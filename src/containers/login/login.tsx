import {LogoPurple, TradeIcon} from '@/components/ui/icons';
import React from 'react';
import SignInButton from './components/signin-button';

const LoginPage = () => {
  return (
    <>
      <div className='hidden flex-col bg-white md:flex md:w-3/5'>
        <div className='mt-16 flex max-w-full flex-col overflow-hidden p-16'>
          <div className='mb-16 flex flex-col items-center'>
            <LogoPurple width={300} />
          </div>
          <TradeIcon />
        </div>
      </div>
      <div className='flex w-full flex-col items-center py-16 md:w-2/5'>
        <div className='md:hidden'>
          <TradeIcon />
          <LogoPurple width={180} className='mt-12' />
        </div>
        <div className='mt-16 flex w-full flex-col items-center gap-10 px-12'>
          <span className='flex flex-col text-center text-4xl font-bold md:text-5xl'>Log in</span>
          <SignInButton className='mt-8' />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
