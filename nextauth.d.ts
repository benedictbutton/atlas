import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    introMessage: boolean;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    introMessage: boolean;
  }
}
