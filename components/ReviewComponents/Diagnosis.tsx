import React from "react";

export default function Diagnosis({data}) {
  
  return (
    <div className="" id="Diagnosis">
      {/* Diagnosis */}
      {/* <div className="text-xl text-white font-semibold mt-2 my-2">
        Diagnosis Report{" "}
      </div> */}
      <div className="flex flex-wrap mb-2 mx-1">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Provisional diagnosis:
          </label>
          <p className="analytics-TextBox max-h-44">
            {data.provisionalDiagnosis}
          </p>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Final diagnosis:
          </label>
          <p className="analytics-TextBox max-h-44">
            {data.finalDiagnosis}
          </p>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Syndromic diagnosis:{" "}
            <span className="bg-slate-300 text-slate-800 p-1 capitalize">
              {data.diagnosisChoice}
            </span>
          </label>
          <p className="analytics-TextBox max-h-44">
            {data.syndromicDiagnosis}
          </p>
        </div>
      </div>
    </div>
  );
}
