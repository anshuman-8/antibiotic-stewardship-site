import { ImSpinner2 } from "react-icons/im";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useMutation, gql } from "@apollo/client";
import ClinicalSign from "../../components/Form/ClinicalSign";
import CultureReport from "../../components/Form/CultureReport";
import AntibioticUsed from "../../components/Form/AntibioticUsed";
import FormIntro from "../../components/Form/FormIntro";
import Diagnosis from "../../components/Form/Diagnosis";
import FocusOfInfection from "../../components/Form/FocusOfInfection";
import { useRouter } from "next/router";
import {
  CultureReportType,
  AntibioticsUsedType,
  ClinicalSignType,
} from "../../utils/types";
import { toyyyymmdd } from "../../utils/functions";

export default function Form() {
  const { patientId } = useRouter().query;
  const router = useRouter();

  const [cultureSent, setCultureSent] = useState(false);

  const [introState, setIntroState] = useState({
    reviewDate: new Date(),
    reviewingDepartment: "",
  });

  const [diagnosisState, setDiagnosisState] = useState({
    provisionalDiagnosis: "",
    finalDiagnosis: "",
    syndromicDiagnosis: "",
    syndromicOptions: "",
  });

  const [focusOfInfectionState, setFocusOfInfectionState] = useState({
    sepsis: false,
    septicShock: false,
    neutropenicSepsis: false,
    pneumonia: false,
    UTI: false,
    CNS: false,
    skinAndSoftTissue: false,
    abdominal: false,
    primaryBacteremia: false,
    secondaryBacteremia: false,
    catheterLinesStents: false,
    other: "",
  });

  const [cultureReportList, setCultureReportList] = useState<
    CultureReportType[] | []
  >([]);

  const emptyCultureReport = {
    report: 1,
    sentBeforeAntibiotics: false,
    dateTimeSent: Date.now().toString(),
    dateTimeReported: Date.now().toString(),
    specimen: "",
    organism: "",
    siteOfCollection: "",
    antibioticSensitivity: [""],
    multiDrugResistance: "",
    resistance: "",
    isXRay: false,
    isUltrasound: false,
    isCTScan: false,
    isMRI: false,
    isPETScan: false,
    impression: "",
  };

  const [antibioticUsedState, setAntibioticUsedState] = useState<
    AntibioticsUsedType[] | []
  >([
    {
      id: "",
      initDate: "",
      antibiotic: "",
      loadingDose: "",
      maintenanceDose: "",
      route: "",
      frequency: "",
      daysDuration: "",
      endDate: "",
    },
  ]);

  const [clinicalSignsValue, setClinicalSignsValue] = useState<
    ClinicalSignType[] | []
  >([
    {
      date: new Date(),
      procalcitonin: "",
      neutrophil: "",
      bloodPressure: "",
      o2Saturation: "",
      whiteBloodCell: "",
      sCreatinine: "",
      cratinineClearance: "",
      temperature: "",
    },
  ]);

  const notifyError = (message: String) => toast.error(message);
  const notifySuccess = (message: String) => toast.success(message);

  const addCultureReport = () => {
    if (cultureSent) {
      const n = cultureReportList[cultureReportList.length - 1].report + 1;
      const newReport: CultureReportType = emptyCultureReport;
      newReport.report = n;
      setCultureReportList([...cultureReportList, newReport]);
    } else {
      setCultureSent(true);
      const newReport: CultureReportType = emptyCultureReport;
      setCultureReportList([...cultureReportList, newReport]);
    }
  };

  const deleteCultureReport = (report: number) => {
    if (cultureSent) {
      setCultureReportList(
        cultureReportList.filter(
          (item: CultureReportType) => item.report !== report
        )
      );
    }
    if (cultureReportList.length <= 1) {
      setCultureSent(false);
    }
  };

  const printAllData = () => {
    console.log("introState", introState);
    console.log("diagnosisState", diagnosisState);
    console.log("focusOfInfectionState", focusOfInfectionState);
    console.log("cultureReportList", cultureReportList);
    console.log("antibioticUsedState", antibioticUsedState);
    console.log("clinicalSignsValue", clinicalSignsValue);
  };

  const patientDataFormGQL = gql`
    mutation ($input: PatientFormInput!) {
      patientDataForm(inputs: $input) {
        success
        returning {
          id
          patient {
            fullName
            mrdNumber
          }
          reviewDate
          iscultureReport
        }
      }
    }
  `;

  const [patientFormData, { data, loading, error }] =
    useMutation(patientDataFormGQL);

  const submitForm = (e) => {
    e.preventDefault();

    const cultureReport =
      cultureSent === false
        ? []
        : cultureReportList.map((item) => {
            return {
              timeReported: item.dateTimeReported,
              timeSent: item.dateTimeSent,
              sentBeforeAntibiotic: item.sentBeforeAntibiotics === "true",
              specimenType: item.specimen,
              organism: item.organism,
              siteOfCollection: item.siteOfCollection,
              resistance: item.resistance,
              multiDrugResistance: item.multiDrugResistance,
              antibioticSensitivity: item.antibioticSensitivity.map(
                (antibioticObj) => {
                  return antibioticObj;
                }
              ),
              Imaging: {
                isxRay: item.isXRay,
                isUltraSound: item.isUltrasound,
                isCTScan: item.isCTScan,
                isMRI: item.isMRI,
                isPETScan: item.isPETScan,
                impression: item.impression,
              },
            };
          });

    const antibioticsUsed = antibioticUsedState.map((item) => {
      return {
        initialDate: item.initDate,
        loadingDose: parseInt(item.loadingDose),
        maintenanceDose: parseInt(item.maintenanceDose),
        route: item.route,
        frequency: parseInt(item.frequency),
        duration: parseInt(item.daysDuration),
        antibiotic: item.antibiotic,
        endDate: item.endDate,
      };
    });

    const clinicalSign = clinicalSignsValue.map((item) => {
      return {
        date: toyyyymmdd(new Date(item.date)),
        procalcitonin: item.procalcitonin,
        sCreatinine: item.sCreatinine,
        temperature: item.temperature,
        o2Saturation: item.o2Saturation,
        whiteBloodCell: item.whiteBloodCell,
        neutrophil: item.neutrophil,
        cratinineClearance: item.cratinineClearance,
        bloodPressure: item.bloodPressure,
      };
    });

    if (introState.reviewingDepartment.trim() === "") {
      notifyError("Please enter reviewing department");
      return;
    }

    const input = {
      patient: parseInt(patientId?.toString() || "0"),
      reviewDate: introState.reviewDate,
      reviewDepartment: introState.reviewingDepartment,
      provisionalDiagnosis: diagnosisState.provisionalDiagnosis,
      finalDiagnosis: diagnosisState.finalDiagnosis,
      syndromicDiagnosis: diagnosisState.syndromicDiagnosis,
      diagnosisChoice: diagnosisState.syndromicOptions,
      sepsis: {
        isSepsis: focusOfInfectionState.sepsis,
        isSepticShock: focusOfInfectionState.septicShock,
        isNeutropenicSepsis: focusOfInfectionState.neutropenicSepsis,
      },
      focusOfInfection: {
        isPneumonia: focusOfInfectionState.pneumonia,
        isUTI: focusOfInfectionState.UTI,
        isCNS: focusOfInfectionState.CNS,
        isSkin: focusOfInfectionState.skinAndSoftTissue,
        isAbdominal: focusOfInfectionState.abdominal,
        isPrimaryBacteraemia: focusOfInfectionState.primaryBacteremia,
        isSecondaryBacteraemia: focusOfInfectionState.secondaryBacteremia,
        isCatheterLinesStents: focusOfInfectionState.catheterLinesStents,
        other: focusOfInfectionState.other,
      },
      cultureReport: cultureReport,
      antibioticUsed: antibioticsUsed,
      clinicalSign: clinicalSign,
    };

    patientFormData({
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
        <form className="w-full" onSubmit={() => printAllData}>
          <div className="max-w-7xl mx-auto mt-3 flex flex-row items-center space-x-10">
            <Link href={"/"} className="w-auto">
              <button className="bg-gray-500/80 backdrop-blur-md text-white px-3 py-2 rounded-md">
                {"< "}
                Back
              </button>
            </Link>
            <div className="my-5 mx-2 text-slate-800 font-semibold uppercase text-2xl">
              Data Review Form{" "}
            </div>
          </div>
          {/* Intro and Diagnosis */}
          <FormIntro
            state={introState}
            setState={setIntroState}
            patientId={patientId}
          />

          {/* Diagnosis */}
          <Diagnosis state={diagnosisState} setState={setDiagnosisState} />

          {/* Suspected focus of infection*/}
          <FocusOfInfection
            state={focusOfInfectionState}
            setState={setFocusOfInfectionState}
          />

          {/* Culture sent */}
          <div className="form-component">
            <div className="text-xl text-white font-semibold mt-2 mb-4 my-1">
              Culture Report
            </div>
            <div className="flex flex-wrap mb-2">
              <div className="flex items-center mb-3">
                <label className="block uppercase tracking-wide text-sm mr-3 font-bold text-white">
                  Culture Sent:{" "}
                </label>
                <input
                  type="radio"
                  name="cultureSent"
                  value="true"
                  required
                  onChange={addCultureReport}
                />
                <label className="mr-6 my-auto ml-2 text-sm font-semibold text-white">
                  Yes
                </label>
                <input
                  type="radio"
                  name="cultureSent"
                  value="false"
                  required
                  onChange={(e) => setCultureSent(false)}
                />
                <label className="mx-2 text-sm font-semibold text-white">
                  No
                </label>
              </div>
            </div>

            {cultureSent && (
              <>
                {cultureReportList.map((li, i) => (
                  <CultureReport
                    key={i}
                    id={li.report}
                    state={cultureReportList}
                    setState={setCultureReportList}
                    deleteCultureReport={deleteCultureReport}
                  />
                ))}
              </>
            )}

            {cultureSent && (
              <div className="-mt-3 mx-3 mb-3 ">
                <button
                  type="button"
                  onClick={() => addCultureReport()}
                  className="bg-blue-500 text-white p-2 mb-2 font-medium rounded-md shadow-lg active:shadow-sm"
                >
                  Add Another Report
                </button>
              </div>
            )}
          </div>

          {/* Antibiotic used*/}
          <AntibioticUsed
            rows={antibioticUsedState}
            setRows={setAntibioticUsedState}
          />

          {/* Clinical Signs correlating with Antibiotic initiation(prior 48 hours) */}
          <ClinicalSign
            state={clinicalSignsValue}
            setState={setClinicalSignsValue}
            patient={patientId}
            date={introState.reviewDate}
          />

          {/* Comments */}
          <div className="flex justify-end mx-auto max-w-6xl mb-10">
            {!loading ? (
              <button
                type="submit"
                className="px-7 py-3 z-10 shadow-xl bg-primary text-white rounded-md text-lg font-medium my-2"
                onClick={(e) => submitForm(e)}
              >
                Submit
              </button>
            ) : (
              <div className="bg-primary/60 mt-3 w-28 h-12 rounded-md">
                <ImSpinner2
                  className="animate-spin my-3 fill-slate-600 mx-auto"
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
