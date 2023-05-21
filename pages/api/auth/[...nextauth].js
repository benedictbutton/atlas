import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../prisma/prismadb';
const bcrypt = require('bcrypt');

const confirmPasswordHash = async (plainPassword, hashedPassword) => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};

export const authOptions = {
  cookie: {
    secure:
      process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  /* The id is used so that when we call the signin method from the frontend we trigger the provider that we need, 
  in this case the credentials. */
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: 'credentials',
      name: 'credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'support@hygraph.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (user !== null) {
            //Compare the hash
            const res = await confirmPasswordHash(
              credentials.password,
              user.password,
            );
            if (res === true) {
              let userAccount = {
                email: user.email,
              };

              return userAccount;
            } else {
              console.log('Hash not matched logging in');
              return null;
            }
          } else {
            return null;
          }
        } catch (err) {
          console.log('Authorize error:', err);
        }
      },
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: 'signup',
      name: 'signup',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'johnDoe@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize({ email, password }) {
        try {
          const hash = await bcrypt.hash(password, 10);
          const user = await prisma.user.create({
            data: {
              email: email,
              password: hash,
            },
          });
          return user;
        } catch (err) {
          console.error('Failed to register user. Error', err);
          return false;
        }
      },
    }),
  ],
  callbacks: {
    /*
     * While using `jwt` as a strategy, `jwt()` callback will be called before
     * the `session()` callback. So we have to add custom parameters in `token`
     * via `jwt()` callback to make them accessible in the `session()` callback
     */

    /*
     * For adding custom parameters to user in session, we first need to add those parameters
     * in token which then will be available in the `session()` callback
     */
    pages: {
      signIn: '/signin',
      signOut: '/signout',
    },
  },
};

export default NextAuth(authOptions);
