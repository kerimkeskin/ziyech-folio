import GoogleProvider from 'next-auth/providers/google';
import {getServerSession, type NextAuthOptions} from 'next-auth';
import {GetServerSidePropsContext, NextApiRequest, NextApiResponse} from 'next';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? '',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthOptions;

export function useGetServerSession(
  ...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, authOptions);
}
