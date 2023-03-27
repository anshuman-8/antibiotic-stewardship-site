import { ImSpinner2 } from "react-icons/im";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Analysis from "../../components/Analysis";

export default function AnalysisPage() {
  const { formId } = useRouter().query;

  const notifyError = (message: String) => toast.error(message);
  
  const getFormDetails = gql`
    query ($id: ID!) {
      form(id: $id) {
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
    }
  `;

  const { loading, error, data } = useQuery(getFormDetails, {
    variables: {
      id: formId,
    },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error :(</p>;

  return (
    <Analysis reportData={data}/>
  );
}
