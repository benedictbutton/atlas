import {
  getProviders,
  getSession,
  getCsrfToken,
} from 'next-auth/react';
import Image from 'next/image';
import type { NextApiRequest } from 'next';
import SignUp from '../components/Authentication/SignUp';

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
  return (
    <div className="relative flex flex-wrap h-full bg-black md:overflow-hidden">
      <h1 className="z-10 w-full text-9xl text-[#80b6ec] text-center mt-14 font-serif font-semi-bold max-md:text-8xl max-md:mb-5">
        BEN&apos;S <span className="atlas">ATLAS</span>
      </h1>
      <div className="z-[5000] flex-1 relative w-full h-auto p-8 max-md:hidden max-lg:w-1/2">
        <Image
          src="/birdseye-globe.jpg"
          alt=""
          className="globe"
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
      <SignUp providers={providers} csrfToken={csrfToken} />
    </div>
  );
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
