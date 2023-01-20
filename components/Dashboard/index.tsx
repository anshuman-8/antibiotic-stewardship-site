import React from 'react'
import PatientCard from './PatientCard'
import PatientCardPlaceholder from './PatientCardPlaceholder'

export default function index() {

  // current date as dd month 20xx
  const todaysDate = ()=> {
    const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const ampm = hours >= 12 ? 'PM' : 'AM';
  // let hours12 = hours % 12;
  // hours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'
  // let minutesStr = minutes < 10 ? '0'+minutes : minutes;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // const strTime = `${hours12}:${minutesStr} ${ampm}`;
  return `${day} ${months[month]} ${year}`;
  }

  return (
    <div className=''>
      <div className='m-5 font-semibold text-xl'>
        {todaysDate()}
      </div>

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

      <div className='mx-5 mt-4 font-semibold text-xl'>
        Pending Analysis:
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
