import React from "react";
import HeaderBar from "./headerBar";
import PatientCard from "./PatientCard";
import { useQuery, gql } from "@apollo/client";
import PatientCardPlaceholder from "./PatientCardPlaceholder";
import PatientTable from "./patientTable";
import TablePlaceholder from "./tablePlaceholder";

export default function DashboardIndex() {

  const getActivePatient = gql`
    query {
      patients {
        id
        fullName
        admittingDoctor
        mrdNumber
        dateOfBirth
        dateOfAdmission
        department
        patientLocation
        cormorbodities
        height
        weight
        active
      }
    }
  `;
  const { loading, error, data } = useQuery(getActivePatient, {
    pollInterval: 10000,
  });

  if (loading) return (<>
     <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder />
        <PatientCardPlaceholder /> */}
        <TablePlaceholder />
      </div>
  </>);

  if (error ) return <p>Error {":("}</p>;

  const todaysDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${day} ${months[month]} ${year}`;
  };

  return (
    <div className="">
      <HeaderBar />

      <div className="mx-5 mt-2 font-semibold text-xl">Pending Review:</div>

      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.patients.map((patient) => (
          <PatientCard
            key={patient.id}
            id={patient.id}
            fullName={patient.fullName}
            mrdNumber={patient.mrdNumber}
            dateOfBirth={patient.dateOfBirth}
            dateOfAdmission={patient.dateOfAdmission}
            department={patient.department}
            cormorbodities={patient.cormorbodities}
            height={patient.height}
            weight={patient.weight}
            active={patient.active}
          />
        ))}
      </div> */}
      <PatientTable data={data.patients}/>
    </div>
  );
}
