import React,{useEffect} from "react";
import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ToastContainer} from "react-toastify";
import Cookies from 'js-cookie';
import { gql } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  const API_URL = "http://localhost:8000/api/";

  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
    headers: {
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    // const accessToken = Cookies.get('accessToken');
    //   const refreshToken = Cookies.get('refreshToken');

    //   const authenticate = async () => {
    //     if (!accessToken || !refreshToken) {
    //       Router.push('/login');
    //       return;
    //     }

    //     try {
    //       await axios.get('/api/verify', {
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       });
    //     } catch (error) {
    //       try {
    //         const response = await axios.post('/api/refresh', {
    //           refreshToken,
    //         });
    //         Cookies.set('accessToken', response.data.accessToken);
    //       } catch (error) {
    //         Cookies.remove('accessToken');
    //         Cookies.remove('refreshToken');
    //         Router.push('/login');
    //       }
    //     }
    //   };
    //   authenticate();
  }, []);

  const fetchToken = async () => {
    const GET_TOKEN =  gql`
    mutation{
    tokenAuth(username:$username,password){
      payload
    }
  }
  `;
  };



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
      <Navbar />

      <ApolloProvider client={client}>
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
    </React.Fragment>
  );
}
