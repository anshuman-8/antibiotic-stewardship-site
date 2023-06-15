import React from "react";

export default function Diagnosis({ data }) {
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

          {data.provisionalDiagnosis ? (
            <p className="analytics-TextBox max-h-44">
              {data.provisionalDiagnosis}
            </p>
          ) : (
            <span className="px-5 py-2 bg-slate-400 mb-3 rounded-md w-min">
              None
            </span>
          )}
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Final diagnosis:
          </label>
          {data.finalDiagnosis ? (
            <p className="analytics-TextBox max-h-44">{data.finalDiagnosis}</p>
          ) : (
            <span className="px-5 py-2 bg-slate-400 mb-3 rounded-md w-min">
              None
            </span>
          )}
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Syndromic diagnosis:{" "}
            <span className="bg-slate-300 text-slate-800 p-1 uppercase rounded-md ">
              {data.diagnosisChoice ? data.diagnosisChoice : "None"}
            </span>
          </label>
          {data.syndromicDiagnosis ? (
            <p className="analytics-TextBox max-h-44">
              {data.syndromicDiagnosis}
            </p>
          ) : (
            <span className="px-5 py-2 bg-slate-400 mb-3 rounded-md w-min">
              None
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
