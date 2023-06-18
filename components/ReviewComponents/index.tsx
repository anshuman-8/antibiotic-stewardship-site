import React from "react";
import Diagnosis from "./Diagnosis";
import InfectionFocus from "./InfectionFocus";
import AntibioticUsed from "./AntibioticUsed";
import CultureReports from "./CultureReports";
import ClinicalSigns from "./ClinicalSigns";
// import Carousel from "flowbite-react";

export default function index({ data }) {

  return (
    <div className="analytics-card">
      <div className="text-xl text-white font-semibold mt-2 my-2">Report: </div>
      <Diagnosis data={data} />
      <InfectionFocus data={data} />
      <AntibioticUsed data={data?.antibioticsUsed} />
      <div className="text-white font-medium mt-4 mb-4 text-lg">
        Culture Reports:
      </div>
      {data.cultureReport.length === 0 ? (
        <span className="px-5 py-2 bg-slate-400 mb-3 rounded-md w-min">
          None
        </span>
      ) : (
        <div className="flex flex-row overflow-auto mb-3 mt-1">
          <div className="w-full">
            {data.cultureReport.map((report, i) => {
              return <CultureReports key={i} id={i} report={report} />;
            })}
          </div>
        </div>
      )}
      {data?.reviewDate?<ClinicalSigns date={data?.reviewDate} patient={data.patient.id} />:<NoData />}
    </div>
  );
}

const NoData = () => {
  return (
    <div className="flex flex-col bg-slate-400 w-min rounded-md px-5 py-2 mb-3 -mt-3">
      <div className="font-base text-lg">None</div>
    </div>
  );
};