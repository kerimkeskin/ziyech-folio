import type {Metadata} from 'next';
import Providers from '@/lib/providers';
import {useGetServerSession} from '@/lib/auth';
import {nexa} from '@/styles/font';
import {cn} from '@/lib/utils';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Ziyech-Folio',
  description: 'Value of assets',
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const session = await useGetServerSession();

  return (
    <html lang='en'>
      <body className={cn(nexa.className)}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
