import React, { useState } from "react";
import DrugReview from "./DrugReview";
import Introduction from "./Introduction";
import Recommendation from "./Recommendation";
import PatientOutcome from "./PatientOutcome";
import Compliance from "./Compliance";
import ReviewComponents from "../ReviewComponents";
import Link from "next/link";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";

export default function Analysis({ data }) {
  const notifyError = (message: String) => toast.error(message);

  const [reviewer, setReviewer] = useState("");
  const [drugAdministeredCheck, setDrugAdministeredCheck] = useState({
    isDrugAdministered: false,
    isRightDrug: false,
    isRightDose: false,
    isRightRoute: false,
    isRightFrequency: false,
    isRightDuration: false,
    isRightIndication: false,
    isAppropriate: false,
    score: 0,
  });
  const [recommendation, setRecommendation] = useState({
    indication: "",
    drug: "",
    dose: "",
    frequency: "",
    duration: "",
    deEscalation: "",
    isindication: false,
    isdrug: false,
    isdose: false,
    isfrequency: false,
    isduration: false,
    isdeEscalation: false,
  });
  const [compliance, setCompliance] = useState({
    isAppropriate: false,
    isRightDocumentation: false,
    isRecommendationFiled: false,
    isAntibioticChanged: false,
    isComplance: false,
    isDuration: false,
    isAntibiotisculture_reporticDoseChanged: false,
    serum_creatinine: 0,
    procalcitonin: 0,
  });
  const [patientOutcome, setPatientOutcome] = useState({
    lenght_of_stay: 0,
    date_of_discharge: "",
    outcome : "Alive",
  });

  return (
    <div className="bg-secondary h-screen w-full relative p-2">
      <div className="">
        <div className="max-w-7xl mx-auto mt-3 flex flex-row items-center space-x-10">
          <Link href={"/"} className="w-auto">
            <button className="bg-gray-500/80 backdrop-blur-md text-white px-3 py-2 rounded-md">
              {"< "}
              Back
            </button>
          </Link>
          <div className="my-5 mx-2 text-slate-800 font-semibold uppercase text-2xl">
            Analysis Form{" "}
          </div>
        </div>
        <form className="w-full">
          <Introduction data={data.form.patient} state={reviewer} setState={setReviewer}/>

          <ReviewComponents data={data.form} />

          <DrugReview state={drugAdministeredCheck} setState={setDrugAdministeredCheck}/>

          <Recommendation state={recommendation} setState={setRecommendation}/>

          <Compliance state={compliance} setState={setCompliance}/>

          <PatientOutcome state={patientOutcome} setState={setPatientOutcome}/>

          {/* Submit */}
          <div className="flex justify-end max-w-6xl mx-auto mb-10">
            {/* {!loading ? (
            <button
              type="submit"
              className="px-7 py-3 z-10 shadow-xl bg-primary text-white rounded-md text-lg font-medium my-2"
              onClick={() => notifyError("Form Not implemented")}
            >
              Submit
            </button>
          ) : (
            <div className="bg-slate-400/50 px-6 mt-3 ">
              <ImSpinner2
                className="animate-spin my-3 fill-primary "
                size={30}
              />
            </div>
          )} */}
          </div>
        </form>
      </div>
    </div>
  );
}
