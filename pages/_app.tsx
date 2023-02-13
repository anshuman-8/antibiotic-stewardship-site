import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


export default function App({ Component, pageProps }: AppProps) {

  const API_URL = 'http://localhost:8000/graphql/';

  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
    headers: {
        'Content-Type': 'application/json',
    }
  });

  return (
    <React.Fragment>
      <Head>
        <title>AMSP</title>
        <meta name="description" content="Amrita Antibiotic Stewardship project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <ApolloProvider client={client}>

      <Component {...pageProps} />
      </ApolloProvider>
    </React.Fragment>
  );
}
