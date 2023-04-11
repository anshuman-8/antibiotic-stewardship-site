import React,{useState} from "react";
import { Card } from "flowbite-react";
import Link from "next/link";
import {ImSpinner2} from 'react-icons/im'
import useSWR from 'swr'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { gql, useMutation} from "@apollo/client";


export default function Authentication() {

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    // const { data, error, isLoading } = useSWR('/api/user/123', fetchToken)

    const GET_TOKEN =  gql`
    mutation($username:String!,$password:String!){
      tokenAuth(username:$username,password:$password){
        payload
      }
   }
  `;
  
  const [
      getAuthToken,
      {
        loading: tokenLoading,
        error: DataError,
        data: tokenData,
      }
    ] = useMutation(GET_TOKEN);

  const fetchToken = async () => {
    getAuthToken({
      variables: {
        username: "anshuman",
        password: "asdfghjk",
      },
    });
  };

  return (
    <div>
      <form
        onSubmit={fetchToken}
      >
        <div className="max-w-xl min-w-fit mx-auto mt-24 py-10 flex flex-col bg-slate-300/40 backdrop-blur-md z-10 shadow-xl rounded-lg items-center">
          <h1 className="text-3xl my-5 font-medium ">Login</h1>

          <div className="my-3 mx-3">
            <div className="mx-2 font-medium">Username</div>
            <input
              className=" border-2 border-primaryDark rounded-xl px-3 py-2 invalid:border-red-500"
              name="username"
              //   onChange={(e) => setEmailInput(e.target.value)}
              type="text"
              required
            />
          </div>

          <div className="relative my-3 mx-3">
            <div className=" mx-2 font-medium ">Password</div>
            <input
              className="peer border-2 border-primaryDark rounded-xl px-3 py-2 focus:border-cyan-500 focus:outline-none focus:shadow-xl invalid:border-red-500"
              type={showPassword?"password":"text"}
              required
            />
            <div
              className="absolute peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-8 top-8 right-4 z-20 cursor-pointer"
                onClick={()=>setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <AiFillEye size={26} />
              ) : (
                <AiFillEyeInvisible size={26} />
              )}
            </div>
          </div>

          <div className="my-3 mx-10">
            New here?{" "}
            <Link href="/signup">
              <span className="text-blue-500 hover:underline cursor-pointer">
                Signup
              </span>
            </Link>
          </div>

          {!tokenLoading ? (
            <button
              className=" px-5 py-3 my-2 bg-primary font-semibold text-lg hover:bg-pink-900 active:scale-95 rounded-lg text-white"
              type="submit">
              Login
            </button>
          ) : (
            <>
              <ImSpinner2
                className="animate-spin my-3 fill-primary"
                size={30}
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
}
