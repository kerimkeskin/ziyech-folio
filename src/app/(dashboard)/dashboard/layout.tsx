import {Metadata} from 'next';
import {ReactNode} from 'react';

export const metadata: Metadata = {
  title: 'Ziyech-Folio',
};

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({children}: IProps) => {
  return <div className='flex min-h-screen flex-col'>{children}</div>;
};

export default DashboardLayout;
