import { useState } from 'react';
import { signIn } from 'next-auth/react';
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
}

interface Props {
  providers: Providers;
  csrfToken: string;
}

interface Inputs {
  email?: string;
  password?: string;
}

const SignIn = ({ providers, csrfToken }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex-1">
      <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full max-lg:pt-0">
        <form
          className="md:max-w-lg mx-auto"
          action={providers['credentials'].callbackUrl}
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
            <p className="mb-2 text-white font-semibold leading-normal">
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
              signIn(providers.credentials.id, {
                callbackUrl: '/map',
                email: email,
                password: password,
              });
            }}
          >
            Sign In
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
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 mr-2 fill-slate-900"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                  ></path>
                </svg>
                <span className="font-semibold leading-normal">
                  Sign in with Github
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

export default SignIn;
