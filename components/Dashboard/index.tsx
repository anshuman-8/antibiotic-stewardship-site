import React, { useRef, useState } from "react";
import HeaderBar from "./HeaderBar";
import PatientCard from "./PatientCard";
import { useQuery, gql } from "@apollo/client";
import PatientCardPlaceholder from "./PatientCardPlaceholder";
import PatientTable from "./PatientTable";
import TablePlaceholder from "./TablePlaceholder";
import AnalysisTab from "./AnalysisTab";
import ActivePatientsTab from "./ActivePatientsTab";
import AnalysisReportTab from "./AnalysisReportTab";
import { Tabs } from "flowbite-react";
import { AiFillCalendar } from "react-icons/ai";
import { TbReportSearch, TbReport } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";

export default function DashboardIndex() {
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
        hasDraft
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
          Loading ...
        </div>
      </>
    );

  if (error)
    return <p className="m-10">Not Connected to Internet or Database {":("}</p>;

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
        <Tabs.Item active={true} title="Today's Review" icon={AiFillCalendar}>
          <div className="mx-20 mt-2 font-semibold text-xl">
            Today{"'"}s Pending Review:
          </div>

          <PatientTable data={data.todayPatientList} />
        </Tabs.Item>

        <Tabs.Item title="Analysis" icon={TbReport}>
          <div className="mx-20 mt-2 font-semibold text-xl">
            Pending Analysis:
          </div>
          <AnalysisTab />
        </Tabs.Item>

        <Tabs.Item title="Completed Analysis" icon={TbReportSearch}>
          <div className="mx-20 mt-2 font-semibold text-xl">
            All Completed Analysis:
          </div>
          <AnalysisReportTab />
        </Tabs.Item>

        <Tabs.Item title="Active Patients" icon={BsPeopleFill}>
          <ActivePatientsTab />
        </Tabs.Item>

        <Tabs.Item disabled={true} title="All Patients">
          All Patients
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
