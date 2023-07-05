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
        <title>Amrita Stewardship Portal</title>
        <meta
          name="description"
          content="Antibiotic Stewardship Portal for managing septic patients and log their daily reports and progress for Amrita Hospital"
          key="description"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Amrita Stewardship Portal" />
        <meta
          property="og:description"
          content="Antibiotic Stewardship Portal for managing septic patients and log their daily reports and progress for Amrita Hospital"
        />
        <meta property="og:site_name" content="Amrita Stewardship Portal" />
        <meta property="og:image" content="/static/stewardship-portal.png" />
        <meta property="og:image:secure_url" content="/static/stewardship-portal.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="810" />
        <meta property="og:image:alt" content="Amrita Stewardship Portal" />
        <meta property="og:url" content="https://amrita-antibiotic-stewardship.vercel.app/" />
        <meta property="og:locale" content="en-IN" />
        <meta property="og:type" content="website" />
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
