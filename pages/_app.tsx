import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import '../styles/globals.css';
import type { NextComponentType } from 'next'; //Import Component type
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

//Add custom appProp type then use union to add it
type CustomAppProps = AppProps<{ session: Session }> & {
  Component: NextComponentType & { auth?: boolean }; // add auth type
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/api/graphql', // Server URL (must be absolute)
  // uri: 'http://bens-atlas.fly.dev/api/graphql'
  // headers: getAuthHeaders(),
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

const client = new ApolloClient({
  // uri: "http://localhost:3000/api/graphql",
  // uri: "https://flyby-gateway.herokuapp.com/",
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({ addTypename: false }),
});

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;

// any props that come into the component
interface Props {
  children?: JSX.Element;
}

const Auth = ({ children }: Props) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });
  console.log(status);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
