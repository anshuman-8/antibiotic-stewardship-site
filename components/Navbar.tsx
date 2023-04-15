import React,{useContext} from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";
import {AuthContext} from '../context/authContext';


export default function Navbar() {

  const {user, login, setLogin} = useContext(AuthContext)
  const router = useRouter();


  return (
    <div className='h-16 bg-slate-300/30 rounded-b-sm py-3 flex flex-row justify-center'>
      <div className='mx-2 grow text-xl font-semibold text-center'>
        ANTIBIOTIC STEWARDSHIP COMMITTEE 
      </div>
     {login?<div className='bg-slate-300/70 backdrop-blur-sm my-auto mx-10 px-5 py-3 rounded-md'>
      {user.name}
     </div>:
     <button onClick={()=>router.push('/login')} className='bg-primary backdrop-blur-sm my-auto mx-10 px-5 py-3 rounded-md text-white font-semibold '>
     Login
    </button>
     }
    </div>
  )
}
