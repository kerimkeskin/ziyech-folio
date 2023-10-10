import {Metadata} from 'next';
import {ReactNode} from 'react';

export const metadata: Metadata = {
  title: 'Login | Ziyech-Folio',
};

interface IProps {
  children: ReactNode;
}

const LoginLayout = ({children}: IProps) => {
  return <div className='flex min-h-screen flex-col'>{children}</div>;
};

export default LoginLayout;
