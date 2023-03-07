import React, { useRef, useState } from "react";
import HeaderBar from "./headerBar";
import PatientCard from "./PatientCard";
import { useQuery, gql } from "@apollo/client";
import PatientCardPlaceholder from "./PatientCardPlaceholder";
import PatientTable from "./patientTable";
import TablePlaceholder from "./tablePlaceholder";
import AnalysisTab from "./analysisTab";
import AllPatientTable from "./allPatients";
import { Tabs, Button, TabsRef } from "flowbite-react";

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

  const getTodaysReviewList = gql`
    query {
      todayPatientList {
        id
        fullName
        admittingDoctor
        mrdNumber
        dateOfBirth
        dateOfAdmission
        department
        patientLocation
        lastReviewDate
        active
      }
    }
  `;
  const { loading, error, data } = useQuery(getTodaysReviewList, {
    pollInterval: 10000,
  });

  if (loading)
    return (
      <>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <TablePlaceholder />
        </div>
      </>
    );

  if (error) return <p>Error {":("}</p>;

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

      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item
          active={true}
          title="Today's Review"
          // icon={HiUserCircle}
        >
          <div className="mx-5 mt-2 font-semibold text-xl">Pending Review:</div>

          <PatientTable data={data.todayPatientList} />
        </Tabs.Item>
        <Tabs.Item
          title="Analysis"
          // icon={MdDashboard}
        >
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.todayPatientList.map((patient) => (
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
          <AnalysisTab/>
        </Tabs.Item>
        <Tabs.Item
          title="Active Patients"
          // icon={HiAdjustments}
        >
          {/* <AllPatientTable/> */}
        </Tabs.Item>
        <Tabs.Item disabled={true} title="All Patients">
          All Patients
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
