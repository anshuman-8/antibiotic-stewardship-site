import React,{useEffect, useContext, useState} from "react";
import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { AuthState } from "../context/authContext";

export default function App({ Component, pageProps }: AppProps) {
  
  // const API_URL = 'https://arctic.pythonanywhere.com/api/';
  const API_URL = "http://localhost:8000/api/";

  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
    headers: {
      "Content-Type": "application/json",
    },
  });


  return (
    <React.Fragment>
      <Head>
        <title>AMSP</title>
        <meta
          name="description"
          content="Amrita Antibiotic Stewardship project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthState>

        <ApolloProvider client={client}>
        <Navbar />
          <div className="fixed z-50 top-10">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
          <Component {...pageProps} />
        </ApolloProvider>
      </AuthState>
    </React.Fragment>
  );
}
