import { ImSpinner2 } from "react-icons/im";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import DrugReview from "../../components/Analysis/DrugReview";
import Introduction from "../../components/Analysis/Introduction";
import Recommendation from "../../components/Analysis/Recommendation";
import PatientOutcome from "../../components/Analysis/PatientOutcome";
import Compliance from "../../components/Analysis/Compliance";
import ReviewComponents from "../../components/ReviewComponents";
import { useRouter } from "next/router";

export default function Analysis() {
  const { patientId } = useRouter().query;
  const [cultureSent, setCultureSent] = useState(false);

  const notifyError = (message: String) => toast.error(message);

  const getFormDetails = gql`
    query ($patientId: ID!, $date: String!) {
      patientsForm(patientId: $patientId, date: $date) {
        id
        patient {
          fullName
          dateOfBirth
          active
          mrdNumber
        }
        provisionalDiagnosis
        finalDiagnosis
        syndromicDiagnosis
        diagnosisChoice
        sepsis {
          isSepsis
          isSepticShock
          isNeutropenicSepsis
        }
        focusOfInfection {
          isUTI
          isCNS
          isSkin
          isPneumonia
          isAbdominal
          isPrimaryBacteraemia
          isCatheterLinesStents
          isSecondaryBacteraemia
        }
        iscultureReport
        cultureReport {
          id
          sentBeforeAntibiotic
          siteOfCollection
          specimenType
          multiDrugResistant
          resistance
          timeSent
          organism
          timeReported
          antibioticSensitivity {
            antibiotic
          }
          Imaging {
            isMRI
            isxRay
            isCTScan
            isPETScan
            isUltraSound
            impression
          }
        }
        antibioticsUsed {
          initialDate
          antibiotic
          frequency
          duration
          route
          loadingDose
          maintenanceDose
          endDate
        }
        clinicalSigns {
          date
          temperature
          procalcitonin
          cratinineClearance
          sCreatinine
          bloodPressure
          neutrophil
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(getFormDetails, {
    variables: {
      patientId: patientId,
      date: "2023-03-03",
    },
  });
  if (loading) return <div>Loading...</div>;
  console.log("dadadatata", data);
  if (error) return <p>Error :(</p>;

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
            {/* <span className="lowercase">(1123MRDnumber)</span> */}
          </div>
        </div>
        <form className="w-full">
          <Introduction data={data.patientsForm[0].patient} />

          <ReviewComponents data={data.patientsForm[0]} />

          <DrugReview />

          <Recommendation />

          <Compliance />

          <PatientOutcome />

          {/* Submit */}
          <div className="flex justify-end max-w-6xl mx-auto mb-10">
            {!loading ? (
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
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
