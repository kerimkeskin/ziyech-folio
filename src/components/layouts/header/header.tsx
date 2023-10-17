import React from 'react';
import AccountPopover from '../sidebar/right-sidebar/account-popover';
import {LogoWhite} from '@/components/ui/icons';

const Header = () => {
  return (
    <div className='sticky top-0 flex h-16 items-center justify-between bg-primary px-5 xl:hidden'>
      <LogoWhite width={150} />
      <AccountPopover />
    </div>
  );
};

export default Header;
