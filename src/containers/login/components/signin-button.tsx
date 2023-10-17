'use client';

import {Button, ButtonProps} from '@/components/ui/button/button';
import {GoogleIcon} from '@/components/ui/icons';
import {cn} from '@/lib/utils';
import {signIn} from 'next-auth/react';
import React from 'react';
import {toast} from 'react-toastify';

interface IProps extends ButtonProps {
  className?: string;
}

const SignInButton = (props: IProps) => {
  const {className, ...other} = props;

  const handleSignIn = React.useCallback(() => {
    try {
      signIn('google', {callbackUrl: '/dashboard'});
    } catch (err: any) {
      toast.error(err);
    }
  }, []);

  return (
    <Button variant='outline' size='lg' className={cn('flex w-full max-w-sm ', className)} onClick={handleSignIn} {...other}>
      <GoogleIcon width={15} height={15} /> <span className='ml-4'>Continue with Google</span>
    </Button>
  );
};

export default SignInButton;
