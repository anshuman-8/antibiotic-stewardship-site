import React from "react";
import Diagnosis from "./Diagnosis";
import InfectionFocus from "./InfectionFocus";
import AntibioticUsed from "./AntibioticUsed";
import ClinicalSigns from "./ClinicalSigns";

export default function index() {
  return (
    <div className="analytics-card">
      {/* <div>Report</div> */}
      <div className="text-xl text-white font-semibold mt-2 my-2">Report </div>
      <Diagnosis />
      <InfectionFocus />
      <AntibioticUsed />
      <ClinicalSigns/>
    </div>
  );
}
