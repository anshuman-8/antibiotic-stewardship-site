import React, { useEffect, useState } from "react";
import DrugReview from "./DrugReview";
import Introduction from "./Introduction";
import Recommendation from "./Recommendation";
import PatientOutcome from "./PatientOutcome";
import Compliance from "./Compliance";
import ReviewComponents from "../ReviewComponents";
import Link from "next/link";
import { toast } from "react-toastify";
import { useMutation, gql } from "@apollo/client";
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from "next/router";

export default function Analysis({ reportData, edit }) {
  const notifyError = (message: String) => toast.error(message);
  const notifySuccess = (message: String) => toast.success(message);

  const router = useRouter();

  const [reviewer, setReviewer] = useState("");
  const [drugAdministeredCheck, setDrugAdministeredCheck] = useState({
    isRightDocumentation: false,
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
    isRecommendationFiled: true,
    isAntibioticChanged: false,
    isComplance: false,
    isDuration: false,
    isAntibiotisDoseChanged: false,
    serumCreatinine: 0,
    comments: "",
  });
  const [patientOutcome, setPatientOutcome] = useState({
    lenghtOfStay: 0,
    dateOfDischarge: "",
    outcome: "Alive",
  });

  useEffect(() => {
    console.log("reportData walala : ", reportData);

    if (edit) {
      setReviewer(reportData.doctor);
      setDrugAdministeredCheck((prevState) => ({
        ...prevState,
        isRightDocumentation: reportData.drugAdministered.isRightDocumentation,
        isRightDrug: reportData.drugAdministered.isRightDrug,
        isRightDose: reportData.drugAdministered.isRightDose,
        isRightRoute: reportData.drugAdministered.isRightRoute,
        isRightFrequency: reportData.drugAdministered.isRightFrequency,
        isRightDuration: reportData.drugAdministered.isRightDuration,
        isRightIndication: reportData.drugAdministered.isRightIndication,
        isAppropriate: reportData.drugAdministered.isAppropriate,
        score: reportData.drugAdministered.score,
      }));
      setRecommendation((prevState) => ({
        ...prevState,
        indication: reportData.recommendation.indication,
        drug: reportData.recommendation.drug,
        dose: reportData.recommendation.dose,
        frequency: reportData.recommendation.frequency,
        duration: reportData.recommendation.duration,
        deEscalation: reportData.recommendation.deEscalation,
        isindication: reportData.recommendation.isindication,
        isdrug: reportData.recommendation.isdrug,
        isdose: reportData.recommendation.isdose,
        isfrequency: reportData.recommendation.isfrequency,
        isduration: reportData.recommendation.isduration,
        isdeEscalation: reportData.recommendation.isdeEscalation,
      }));
      setCompliance((prevState) => ({
        ...prevState,
        isAppropriate: reportData.compliance.isAppropriate,
        isRightDocumentation: reportData.compliance.isRightDocumentation,
        isRecommendationFiled: reportData.compliance.isRecommendationFiled,
        isAntibioticChanged: reportData.compliance.isAntibioticChanged,
        isComplance: reportData.compliance.isComplance,
        isDuration: reportData.compliance.isDuration,
        isAntibiotisDoseChanged: reportData.compliance.isAntibiotisDoseChanged,
        serumCreatinine: reportData.compliance.serumCreatinine,
        comments: reportData.compliance.comments,
      }));
      setPatientOutcome((prevState) => ({
        ...prevState,
        lengthOfStay: reportData.patientOutcome.lengthOfStay,
        dateOfDischarge: reportData.patientOutcome.dateOfDischarge,
        outcome: reportData.patientOutcome.outcome,
      }));
    }
  }, [edit, reportData]);

  const AnalysisDataFormGQL = gql`
    mutation ($input: AnalysisFormInput!) {
      analysisDataForm(inputs: $input) {
        success
        returning {
          id
          doctor
        }
      }
    }
  `;

  const [analysisFormData, { data, loading, error }] =
    useMutation(AnalysisDataFormGQL);

  const submitForm = (e, isDraft) => {
    e.preventDefault();
    if (reviewer === "") {
      notifyError("Please enter Reviewing Doctor!");
      return;
    }
    const input = {
      // date = toyyyymmdd(Date.now())
      doctor: reviewer,
      patient: reportData.patientForm.patient.id,
      patientForm: reportData.patientForm.id,
      drugAdministeredReview: drugAdministeredCheck,
      patientOutcome: patientOutcome,
      compliance: compliance,
      recommendation: recommendation,
    };
    console.log(input);

    analysisFormData({
      variables: {
        input: input,
      },
      onCompleted: (data) => {
        notifySuccess("Form Submitted Successfully!");
        router.push("/");
      },
      onError: (error) => {
        notifyError("Form Submission Failed!");
      },
    });
  };

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
          <Introduction
            data={reportData.patientForm.patient}
            state={reviewer}
            setState={setReviewer}
          />

          <ReviewComponents data={reportData.patientForm} />

          <DrugReview
            state={drugAdministeredCheck}
            setState={setDrugAdministeredCheck}
          />

          <Recommendation state={recommendation} setState={setRecommendation} />

          <Compliance state={compliance} setState={setCompliance} />

          <PatientOutcome state={patientOutcome} setState={setPatientOutcome} />

          {/* Submit */}
          <div className="flex justify-end max-w-6xl mx-auto mb-10">
            {!loading ? (
              <div className="space-x-5">
                {/* <button
                  type="submit"
                  className="px-7 py-3 z-10 shadow-xl bg-primary text-white rounded-md text-lg font-medium my-2"
                  onClick={(e) => submitForm(e, true)}
                >
                  Save as Draft
                </button> */}
                <button
                  type="submit"
                  className="px-7 py-3 z-10 shadow-xl bg-primary text-white rounded-md text-lg font-medium my-2"
                  onClick={(e) => submitForm(e, false)}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="bg-slate-400/50 px-6 mt-3 ">
                <ImSpinner2
                  className="animate-spin my-3 fill-primary "
                  size={30}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
