import {
  getProviders,
  getSession,
  getCsrfToken,
} from 'next-auth/react';
import type { NextApiRequest } from 'next';
import SignUp from '../components/SignUp';

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

const SignUpPage = ({ providers, csrfToken }: Props) => {
  return <SignUp providers={providers} csrfToken={csrfToken} />;
};

SignUpPage.auth = false;

export default SignUpPage;

export async function getServerSideProps(context: {
  req: NextApiRequest;
}) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: '/home' },
    };
  }

  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(),
    },
  };
}
