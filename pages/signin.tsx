import {
  getProviders,
  getSession,
  getCsrfToken,
} from 'next-auth/react';
import type { NextApiRequest } from 'next';
import SignIn from '../components/SignIn';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

interface Providers {
  credentials: Provider;
  github: Provider;
  signup: Provider;
}

interface Props {
  providers: Providers;
  csrfToken: string;
}

const SignInPage = ({ providers, csrfToken }: Props) => {
  return <SignIn providers={providers} csrfToken={csrfToken} />;
};

SignInPage.auth = false;

export default SignInPage;

export async function getServerSideProps(context: {
  req: NextApiRequest;
}) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: '/map' },
    };
  }

  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(),
    },
  };
}
