import type {Metadata} from 'next';
import Providers from '@/lib/providers';
import {Inter} from 'next/font/google';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/lib/auth';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import AuthLayout from '@/components/layouts/auth-layout';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Ziyech-Folio',
  description: 'Value of assets',
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers session={session}>
          {session?.user ? <DashboardLayout>{children}</DashboardLayout> : <AuthLayout>{children}</AuthLayout>}
        </Providers>
      </body>
    </html>
  );
}
