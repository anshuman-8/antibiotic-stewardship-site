import React from "react";
import Diagnosis from "./Diagnosis";
import InfectionFocus from "./InfectionFocus";
import AntibioticUsed from "./AntibioticUsed";
import CultureReports from "./CultureReports";
import ClinicalSigns from "./ClinicalSigns";
import Carousel from "flowbite-react";

export default function index({ data }) {
  console.log("for review,",data);
  
  return (
    <div className="analytics-card">
      {/* <div>Report</div> */}
      <div className="text-xl text-white font-semibold mt-2 my-2">Report </div>
      <Diagnosis data={data} />
      <InfectionFocus data={data} />
      <AntibioticUsed data={data.antibioticsUsed} />
      <div className="text-white font-medium mt-4 text-lg">Culture Reports</div>
      <div className="flex flex-row overflow-auto mb-3 mt-1">
        <div>

          {data.cultureReport.map((report, i) => {
            return <CultureReports key={i} id={i} report={report} />;
          })}

        </div>
      </div>
      <ClinicalSigns data={data.clinicalSigns}/>
    </div>
  );
}
