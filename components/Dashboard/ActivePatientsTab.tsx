import React from "react";
import { useQuery, gql } from "@apollo/client";
import PatientCard from "./PatientCard";
import PatientCardPlaceholder from "./PatientCardPlaceholder";

export default function ActivePatientsTab() {
  const getActivePatient = gql`
    query {
      activePatients {
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

  if (loading)
    return (
      <>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PatientCardPlaceholder />
          <PatientCardPlaceholder />
          <PatientCardPlaceholder />
          <PatientCardPlaceholder />
          <PatientCardPlaceholder />
          <PatientCardPlaceholder />
          <PatientCardPlaceholder />
          <PatientCardPlaceholder />
        </div>
      </>
    );

  return (
    <div>
      {data.activePatients.lenght !== 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.activePatients.map((patient) => (
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
        </div>
      ) : (
        <div className="bg-gray-50 m-5 p-5">No Active Patients !</div>
      )}
    </div>
  );
}
