import { ImSpinner2 } from "react-icons/im";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

import ClinicalSign from "../components/Form/ClinicalSign";
import CultureReport from "../components/Form/CultureReport";
import AntibioticUsed from "../components/Form/AntibioticUsed";
import FormIntro from "../components/Form/FormIntro";
import Diagnosis from "../components/Form/Diagnosis";
import FocusOfInfection from "../components/Form/FocusOfInfection";

interface CultureReportType {
  report: number;
}

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [cultureSent, setCultureSent] = useState(false);
  const [cultureReportList, setCultureReportList] = useState<
    CultureReportType[] | []
  >([]);

  const notify = (message: String) => toast.error(message);

  const addCultureReport = () => {
    if (cultureSent) {
      const n = cultureReportList[cultureReportList.length - 1].report + 1;
      setCultureReportList([...cultureReportList, { report: n }]);
    } else {
      setCultureSent(true);
      setCultureReportList([...cultureReportList, { report: 1 }]);
    }
  };

  const deleteCultureReport = (report: number) => {
    if (cultureSent) {
      setCultureReportList(
        cultureReportList.filter((item : CultureReportType) => item.report !== report)
      );
    }
    if (cultureReportList.length <= 1) {
      setCultureSent(false);
    }
  };

  return (
    <div className="bg-secondary h-screen w-full relative p-2">
      <div className="fixed z-50 top-10">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="">
        <form className="w-full">
          <div className="max-w-7xl mx-auto mt-3 flex flex-row items-center space-x-10">
            <Link href={"/"} className="w-auto">
              <button className="bg-gray-500/80 backdrop-blur-md text-white px-3 py-2 rounded-md">
                {"< "}
                Back
              </button>
            </Link>
            <div className="my-5 mx-2 text-slate-800 font-semibold uppercase text-2xl">
                Data Review Form{" "}
                {/* <span className="lowercase">(1123MRDnumber)</span> */}
              </div>
          </div>
          {/* Intro and Diagnosis */}
          <FormIntro />

          {/* Diagnosis */}
          <Diagnosis />

          {/* Suspected focus of infection*/}
          <FocusOfInfection />

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
          <AntibioticUsed />

          {/* Clinical Signs correlating with Antibiotic initiation(prior 48 hours) */}
          <ClinicalSign />

          {/* Comments */}
          {/* <CommentsClassification submitButton={submitButton}/> */}
          <div className="flex justify-end mx-auto max-w-6xl mb-10">
            {!loading ? (
              <button
                type="submit"
                className="px-7 py-3 z-10 shadow-xl bg-primary text-white rounded-md text-lg font-medium my-2"
                onClick={() => notify("Form not yet completed!!")}
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
          {/* Submit */}
        </form>
      </div>
    </div>
  );
}
