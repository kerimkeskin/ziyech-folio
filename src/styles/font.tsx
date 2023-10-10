import localFont from 'next/font/local';

export const nexa = localFont({
  src: [
    {
      path: '../../public/fonts/Nexa-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nexa-Bold.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nexa-ExtraBold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nexa',
});
