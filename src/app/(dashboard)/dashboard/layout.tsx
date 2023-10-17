import {ReactNode} from 'react';
import {Metadata} from 'next';
import {redirect} from 'next/navigation';
import {useGetServerSession} from '@/lib/auth';
import MainLayout from '@/components/layouts/main-layout';

export const metadata: Metadata = {
  title: 'Ziyech-Folio',
};

interface IProps {
  children: ReactNode;
}

const DashboardLayout = async ({children}: IProps) => {
  const session = await useGetServerSession();

  if (!session) {
    redirect('/login');
    return;
  }

  return <MainLayout>{children}</MainLayout>;
};

export default DashboardLayout;
