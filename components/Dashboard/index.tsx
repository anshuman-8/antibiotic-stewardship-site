import React from 'react'
import PatientCard from './PatientCard'
import PatientCardPlaceholder from './PatientCardPlaceholder'
import HeaderBar from './headerBar'

export default function index() {

  const todaysDate = ()=> {
    const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${day} ${months[month]} ${year}`;
  }

  return (
    <div className=''>
      {/* <div className='m-5 font-semibold text-xl'>
        {todaysDate()}
      </div> */}
      <HeaderBar />

      <div className='mx-5 mt-2 font-semibold text-xl'>
        Pending Review:
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <PatientCard />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
      </div>

    </div>
  )
}
