import React from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useMutation, gql, useQuery } from "@apollo/client";
import { ExportToCsv } from "export-to-csv";
import { toast } from "react-toastify";

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

  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const dischargePatientGQL = gql`
    mutation ($id: ID) {
      dischargePatient(id: $id)
    }
  `;

  const generateCSVGQL = gql`
    mutation ($patientid: ID) {
      generateCSV(patientId: $patientid) {
        encodedCsv
      }
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

  const [dischargePatient] = useMutation(dischargePatientGQL);
  const [generateCSV] = useMutation(generateCSVGQL);

  const getPatientReportData = useQuery(PatientReportGQL, {
    variables: { id: id },
    onError: (error) => {
      notifyError("Failed to fetch patient report data.");
      console.error(error);
    },
  });

  console.log("getPatientReportData:", getPatientReportData);

  const dischargeButton = () => {
    if (confirm("Sure? discharge " + fullName)) {
      dischargePatient({ variables: { id: id } })
        .then(() => notifySuccess("Patient Discharged"))
        .catch((err) => notifyError(err.message));
    }
  };

  const downloadReportButton = () => {
    if (getPatientReportData.loading) {
      return;
    }

    console.log("getPatientReportData.data:", getPatientReportData.data);

    if (getPatientReportData.error) {
      notifyError("Failed to fetch patient report data.");
      console.error(getPatientReportData.error);
      return;
    }

    const patientReportData = getPatientReportData.data?.patientAnalysisForms;

    console.log("patientReportData:", patientReportData);

    generateCSV({ variables: { patientid: id } })
      .then((res) => {
        const encodedCsv = res.data.generateCSV.encodedCsv;
        const decodedCsv = Buffer.from(encodedCsv, "base64").toString("utf-8");
        const csvData = new Blob([decodedCsv], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(csvData);
        link.download = `${fullName} Patient Report Data.csv`;
        link.click();
        notifySuccess("CSV generated successfully.");
      })
      .catch((error) => {
        notifyError("Failed to generate CSV.");
        console.error(error);
      });
  };

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
          onClick={downloadReportButton}
        >
          {getPatientReportData.loading ? "Loading ..." : "Download Report"}
        </div>
      </div>
    </div>
  );
}
