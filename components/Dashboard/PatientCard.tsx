import React, { useEffect } from "react";
import Link from "next/link";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useMutation, gql, useLazyQuery } from "@apollo/client";
import { CSVLink } from "react-csv";

export default function PatientCard(props) {
  const {
    id,
    fullName,
    mrdNumber,
    dateOfAdmission,
    department,
    cormorbodities,
    height,
    weight,
    active,
  } = props;

  const dischargePatientGQL = gql`
    mutation ($id: ID) {
      dischargePatient(id: $id)
    }
  `;

  const PatientReportGQL = gql`
    query ($id: ID!) {
      patientAnalysisForms(patientId: $id) {
        id
        date
        doctor
        patientForm {
          id
          reviewDate
          reviewDepartment
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
            isPneumonia
            isSkin
            isAbdominal
            isPrimaryBacteraemia
            isSecondaryBacteraemia
            isCatheterLinesStents
            other
          }
          cultureReport {
            id
            timeSent
            timeReported
            sentBeforeAntibiotic
            specimenType
            siteOfCollection
            organism
            antibioticSensitivity {
              antibiotic
            }
            multiDrugResistant
            resistance
            Imaging {
              id
              isxRay
              isUltraSound
              isCTScan
              isMRI
              isPETScan
              impression
            }
          }
          antibioticsUsed {
            antibiotic
            initialDate
            loadingDose
            maintenanceDose
            route
            frequency
            duration
            endDate
          }
        }
        drugAdministered {
          isRightDocumentation
          isRightDrug
          isRightDose
          isRightRoute
          isRightFrequency
          isRightDuration
          isRightIndication
          isAppropriate
          score
        }
        patientOutcome {
          id
          lenghtOfStay
          dateOfDischarge
          outcome
        }
        compliance {
          serumCreatinine
          isAppropriate
          isRightDocumentation
          isRecommendationFiled
          isAntibioticChanged
          isComplance
          isDuration
          isAntibiotisDoseChanged
        }
        recommendation {
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
  const [
    dischargePatient,
    { data: dischargeData, loading: dischargeLoading, error: dischargeError },
  ] = useMutation(dischargePatientGQL);

  const [
    getPatientReportData,
    {
      loading: reportDataLoading,
      error: reportDataError,
      data: patientReportData,
    },
  ] = useLazyQuery(PatientReportGQL);

  const [reportData, setReportData] = React.useState([]);

  const dischargeButton = () => {
    console.log("discharge");
    if (confirm("Sure? discharge " + fullName)) {
      dischargePatient({ variables: { id: id } });
    }
  };

  const downloadReport = () => {
    console.log(id);

    getPatientReportData({ variables: { id: id } });
    console.log("loading");
    // if (!reportDataLoading && !reportDataError && patientReportData) {
    //   console.log(patientReportData.patientAnalysisForms)
    // }
  };

  // useEffect(() => {
  //   console.log(!reportDataLoading && !reportDataError);

  //   if (!reportDataLoading && !reportDataError && patientReportData) {
  //     console.log(patientReportData.patientAnalysisForms);
  //   }
  // }, [patientReportData, reportDataError, reportDataLoading]);

  const downloadCSV = () => {
    console.log(reportData);
  };

  // function getReportData() {
  //   return "hello world";
  // };

  return (
    <div className="bg-slate-100/50 backdrop-blur-sm m-5 max-w-lg border min-w-min rounded-md p-2">
      <div className="flex flex-row items-center">
        <div className="text-xl my-1">{fullName}</div>
        {active ? (
          <GrStatusGoodSmall className="fill-green-700 mx-1" />
        ) : (
          <GrStatusGoodSmall className="fill-red-700 mx-1" />
        )}
      </div>
      <div>MRD No: {mrdNumber}</div>
      <div className="space-x-5">
        {" "}
        <span> Age: 19 </span> <span>Sex: M</span>
      </div>

      <div className="space-x-5 mt-5 mb-2 flex flex-row">
        <div
          className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400 cursor-pointer"
          onClick={dischargeButton}
        >
          Discharge
        </div>
        <div
          className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400"
          // data={patientReportData.patientAnalysisForms || []}
          // asyncOnClick={true}
          // onClick={(event, done) => {
          //   dischargePatient({ variables: { id: id } });

          //   done(!reportDataLoading || patientReportData.patientAnalysisForms.lenght!==0);
          // }}
          // filename={"report.csv"}
        >
          {reportDataLoading ? "Loading ..." : "Download Report"}
        </div>
      </div>
    </div>
  );
}
