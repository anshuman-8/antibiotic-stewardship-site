import React from "react";
import Diagnosis from "./Diagnosis";
import InfectionFocus from "./InfectionFocus";
import AntibioticUsed from "./AntibioticUsed";
import CultureReports from "./CultureReports";
import ClinicalSigns from "./ClinicalSigns";

export default function index() {
  return (
    <div className="analytics-card">
      {/* <div>Report</div> */}
      <div className="text-xl text-white font-semibold mt-2 my-2">Report </div>
      <Diagnosis />
      <InfectionFocus />
      <AntibioticUsed />
      <div className="flex flex-row overflow-auto my-3">
        <CultureReports id={34} />
        <CultureReports id={37} />
        <CultureReports id={32} />
        <CultureReports id={31} />
      </div>
      <ClinicalSigns />
    </div>
  );
}
