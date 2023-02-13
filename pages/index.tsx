import Link from "next/link";
import Dashboard from "../components/Dashboard";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


export default function Home() {

  const API_URL = 'http://localhost:8000/graphql/';

  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
    headers: {
        'Content-Type': 'application/json',
    }
  });

  return (
    <>
    <ApolloProvider client={client}>

      <main>
        <Dashboard/>
      </main>
    </ApolloProvider>
    </>
  );
}
