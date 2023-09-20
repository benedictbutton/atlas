import {
  getProviders,
  getSession,
  getCsrfToken,
} from 'next-auth/react';
import Image from 'next/image';
import type { NextApiRequest } from 'next';
import SignIn from '../components/Authentication/SignIn';

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
  return (
    <div className="bg-black w-full h-full">
      <h1 className="z-10 py-5 text-9xl text-[#80b6ec] text-center font-serif font-semi-bold max-md:text-7xl">
        BEN&apos;S <span className="atlas">ATLAS</span>
      </h1>
      <div className="flex w-1/2 mx-auto bg-black max-xl:w-full max-sm:flex-col max-sm:h-full">
        <div className="flex-1 relative z-[5000]">
          <Image
            src="/birdseye-globe.png"
            alt=""
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
        <SignIn providers={providers} csrfToken={csrfToken} />
      </div>
    </div>
  );
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
