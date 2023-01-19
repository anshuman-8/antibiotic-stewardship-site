import React from 'react'
import PatientCard from './PatientCard'
import PatientCardPlaceholder from './PatientCardPlaceholder'

export default function index() {
  return (
    <div className='grid grid-cols-4'>
      <PatientCard />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
    </div>
  )
}
