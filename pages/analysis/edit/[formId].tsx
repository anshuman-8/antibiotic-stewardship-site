import { ImSpinner2 } from "react-icons/im";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Analysis from "../../../components/Analysis";

export default function AnalysisPage() {
  const { formId } = useRouter().query;

  const notifyError = (message: String) => toast.error(message);

  const getFormDetails = gql`
    query ($id: ID!) {
      analysisForm(id: $id) {
        id
        date
        doctor
        patient {
          fullName
        }
        patientForm {
          id
          reviewDate
          patient {
            id
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
            other
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
        }
        drugAdministered {
          id
          isRightDrug
          isRightDose
          isRightRoute
          isAppropriate
          isRightDuration
          isRightFrequency
          isRightIndication
          isRightDocumentation
          score
        }
        patientOutcome {
          id
          lenghtOfStay
          dateOfDischarge
          outcome
        }
        compliance {
          id
          serumCreatinine
          isAppropriate
          isRightDocumentation
          isRecommendationFiled
          isAntibioticChanged
          isComplance
          isDuration
          isAntibioticChanged
        }
        recommendation {
          id
          indication
          drug
          dose
          frequency
          duration
          deEscalation
          isindication
          isdrug
          isdose
          isfrequency
          isduration
          isdeEscalation
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(getFormDetails, {
    variables: {
      id: formId,
    },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error :(</p>;

  console.log("the data: ",data);

  return <Analysis reportData={data?.analysisForm} edit={true} />;
}
