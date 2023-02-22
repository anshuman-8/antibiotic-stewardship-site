import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='h-16 bg-slate-300/30 rounded-b-sm py-3 flex flex-row justify-center'>
      <div className='mx-2 text-xl font-semibold'>
        ANTIBIOTIC STEWARDSHIP COMMITTEE 
      </div>
      {/* <div>
      <Link href="/p-register">
          <div className="bg-white px-3 py-2 mx-5 rounded-md shadow-xl active:shadow-sm hover:bg-gray-400">
            Register Patient
          </div>
        </Link>
      </div> */}
    </div>
  )
}
