import AuthLayout from '@/components/layouts/auth-layout';
import {useGetServerSession} from '@/lib/auth';
import {Metadata} from 'next';
import {redirect} from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login | Ziyech-Folio',
};

interface IProps {
  children: React.ReactNode;
}

const LoginLayout = async ({children}: IProps) => {
  const session = await useGetServerSession();

  if (session) {
    redirect('/dashboard');
    return;
  }

  return <AuthLayout>{children}</AuthLayout>;
};

export default LoginLayout;
