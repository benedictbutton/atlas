import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
// import { gql } from "../pages/__generated__/gql";

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

interface Inputs {
  email?: string;
  password?: string;
}

const SignUp = ({ providers, csrfToken }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full md:w-1/2 p-8 bg-black">
      <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
        <form
          className="md:max-w-lg mx-auto"
          action={providers['signup'].callbackUrl}
          method="post"
        >
          <input type="hidden" name="csrfToken" value={csrfToken} />

          <label className="block mb-4">
            <p className="mb-2 text-white font-semibold leading-normal">
              Email Address *
            </p>
            <input
              className="px-4 py-3.5 w-full text-black font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
              id="signInInput1-1"
              type="text"
              placeholder="Enter email address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className="block mb-5">
            <p className="mb-2 text-gray-900 font-semibold leading-normal">
              Password *
            </p>
            <input
              className="px-4 py-3.5 w-full text-black font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
              type="password"
              placeholder="********"
              name="password"
              id="input-password-for-credentials-provider"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <div className="flex flex-wrap justify-between -m-2 mb-4">
            <div className="w-auto p-2">
              <div className="flex items-center">
                <input
                  className="w-4 h-4"
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                />
                <label
                  className="ml-2 text-sm text-white font-medium"
                  htmlFor="default-checkbox"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <div className="w-auto p-2">
              <a
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            className="mb-9 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signIn(providers.signup.id, {
                callbackUrl: '/map',
                email: email,
                password: password,
              });
            }}
          >
            Sign Up
          </button>
          <p className="mb-5 text-sm text-gray-500 font-medium text-center">
            Or continue with
          </p>
          <div className="flex flex-wrap justify-center -m-2">
            <div className="w-auto p-2">
              <button
                className="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200"
                onClick={(e) => {
                  signIn('Github', {
                    callbackUrl: '/map',
                    email: email,
                  });
                }}
              >
                <span className="font-semibold leading-normal">
                  Sign up with Github
                </span>
              </button>
            </div>
            {/* <div className="w-auto p-2">
                  <button className="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                    <span className="font-semibold leading-normal">
                      Sign in with Facebook
                    </span>
                  </button>
                </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
