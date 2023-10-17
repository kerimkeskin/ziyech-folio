'use client';

import React from 'react';
import {signOut, useSession} from 'next-auth/react';
import {useToast} from '@/lib/hooks/use-toast';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar/avatar';
import {ArrowDownIcon, LogoutIcon} from '@/components/ui/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu/dropdown-menu';

const AccountPopover = () => {
  const {data: session} = useSession();
  const toast = useToast();

  const avatarFallback = React.useMemo(() => session?.user?.name?.slice(0, 1).toUpperCase(), [session?.user?.name]);

  const handleSignOut = React.useCallback(() => {
    try {
      signOut();
    } catch (err: any) {
      toast.error(err);
    }
  }, [toast]);

  return (
    <div className='flex cursor-pointer'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div role='button' className='flex items-center gap-2 text-white xl:text-black'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src={session?.user?.image || ''} alt={avatarFallback} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-2'>
              <span className='h-5 font-bold'>{session?.user?.name}</span>
              <ArrowDownIcon className='fill-white xl:fill-black' />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 bg-white'>
          <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
          <DropdownMenuSeparator className='bg-gray-300' />
          <DropdownMenuItem className='cursor-pointer hover:bg-gray-200' onClick={handleSignOut}>
            <LogoutIcon className='mr-2 h-5 w-5' />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AccountPopover;
