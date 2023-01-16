import { ImSpinner2 } from "react-icons/im";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import CultureReport from "../components/Form/CultureReport";
import AntibioticUsed from "../components/Form/AntibioticUsed";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [cultureSent, setCultureSent] = useState(false);
  const [cultureReportList, setCultureReportList] = useState([]);

  const notify = (message: String) => toast.error(message);

  const to_dd_mm_yyyy = (date: Date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = 0 + dd;
    }
    if (mm < 10) {
      mm = 0 + mm;
    }
    return dd + "/" + mm + "/" + yyyy;
  };

  const addCultureReport = () => {
    if(cultureSent){
      const n = cultureReportList[cultureReportList.length-1].report  + 1 
      setCultureReportList(cultureReportList.concat({"report": n}));
    }else{
      setCultureSent(true);
      setCultureReportList(cultureReportList.concat({"report": 1}));
    }
  };

  const deleteCultureReport = (report: number) => {
    if(cultureSent){
      setCultureReportList(cultureReportList.filter((item) => item.report !== report));
    }
    if(cultureReportList.length<=1){
      setCultureSent(false);
    }
  }

  const clinicalSigns=[{
    name:"Temp(F)",
    id:"cstempf",
    placeholder:""
  },
  {
    name:"Blood Pressure(mmHg)",
    id:"csbp",
    placeholder:"BP"
  },
  {
    name:"O2 Saturation (%)",
    id:"csosat",
    placeholder:""
  },
  {
    name:"White Blood Cells (K/uL)",
    id:"cswbc",
    placeholder:""
  },
  {
    name:"CRP (mg/L)",
    id:"cscrp",
    placeholder:""
  },
  {
    name:"Procalcitonin (ng/ml)",
    id:"csprocalc",
    placeholder:""
  },
  {
    name:"Lactate (mmol/L)",
    id:"cslactate",
    placeholder:""
  },
  {
    name:"S.Creatinine(mg/dl)",
    id:"cscreatinine",
    placeholder:""
  },
  {
    name:"Neutrophils %",
    id:"csneutrophils",
    placeholder:""
  },
  {
    name:"Platelets (109/L)",
    id:"csplatelets",
    placeholder:""
  },
  {
    name:"Urine analysis",
    id:"csurine",
    placeholder:""
  },
  {
    name:"CSF study",
    id:"csfstudy",
    placeholder:""
  },
  {
    name:"Body fluid study",
    id:"csbodyfluid",
    placeholder:""
  },
  // {
  //   name:"",
  //   id:"",
  //   placeholder:""
  // },
]


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
      <div className="w-11/12 mx-auto max-w-7xl my-6 pt-7 pb-10 bg-slate-700/80 flex flex-col z-10 shadow-xl rounded-lg p-5 backdrop-blur-md">
        <Link href={"/"} className="w-min">
          <button className="bg-gray-500/80 backdrop-blur-md text-white px-3 py-2 rounded-md">
            {" "}
            Back
          </button>
        </Link>
        <form className="w-full">
          <div className="my-5 mx-2 text-white font-semibold uppercase text-2xl">
            Data Collection Form{" "}
            <span className="lowercase">(1123MRDnumber)</span>
          </div>

          <div className="text-white text-lg my-3">
            <span>Review Date: </span> <span>{to_dd_mm_yyyy(new Date())}</span>
          </div>

          {/* to display patient data */}
          <div className="text-white font-medium my-5">
            <div>Patient Name: Anshuman Swain</div>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-5">
            <label
              className="label-upper"
              htmlFor=""
            >
              Reviewing Department
            </label>
            <input
              required
              className="input-imp"
              name="department"
              id="department"
              type="text"
              placeholder="Department"
            />
          </div>

          {/* Diagnosis */}
          <div className="text-lg text-white font-semibold mt-2 my-1">
            Diagnosis{" "}
          </div>
          <div className="flex flex-wrap mb-5 mx-1">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                Provisional diagnosis:
              </label>
              <input
                required
                className="input-imp"
                name="department"
                id="department"
                type="text"
                placeholder="Department"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                Final diagnosis:
              </label>
              <input
                required
                className="input-imp"
                name="department"
                id="department"
                type="text"
                placeholder="Department"
              />
            </div>

            <div className="w-full md:w-3/12 md:pl-3 md:pr-1 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                Syndromic diagnosis:
              </label>
              <input
                required
                className="input-imp"
                name="department"
                id="department"
                type="text"
                placeholder="Organism"
              />
            </div>

            <div className="w-full md:w-1/12 mb-6 md:mb-0">
              <label
                htmlFor="specimen"
                className="font-semibold text-white"
              ></label>
              <div className="relative mt-7">
                <select
                  className=" input-imp"
                  name="branch"
                  id="grid-branch"
                  required
                  defaultValue={"Select Specialization"}
                >
                  <option value="Select Specialization" disabled>
                    Select
                  </option>
                  <option value="Blood">Probable</option>
                  <option value="Blood">Definite</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* infection */}
          <div className="mb-5">
            <div className="text-white my-3 text-base font-semibold">
              Suspected Focus Of Infection
            </div>
            {/* give a checkbox options with 5 in a row asking for different infections */}
            <div className="w-full flex flex-wrap font-medium text-white">
              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input type="checkbox" name="UTI" id="UTI" className="" />
                <label htmlFor="infection" className="ml-2">
                  UTI
                </label>
              </div>

              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input type="checkbox" name="CNS" id="CNS" className="" />
                <label htmlFor="infection" className="ml-2">
                  CNS
                </label>
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="skinAndSoftTissue"
                  id="skinAndSoftTissue"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Skin And Soft Tissue
                </label>
              </div>

              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="abdominal"
                  id="abdominal"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Abdominal
                </label>
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="bacteremia"
                  id="bacteremia"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Bacteremia
                </label>
              </div>

              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="catheter_Lines_Stents"
                  id="catheter_Lines_Stents"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Catheter Lines Stents
                </label>
              </div>

              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="pneumonia"
                  id="pneumonia"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Pneumonia
                </label>
              </div>
              <div className="w-full sm:w-2/3 md:w-2/5 my-2 mx-2">
                <label htmlFor="infection" className="ml-2">
                  Others:{" "}
                </label>
                <input
                  type="text"
                  name="infection"
                  id="infection"
                  className="appearance-none  bg-gray-100 text-gray-700 border rounded py-1 px-2  leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Culture sent */}
          <div className="flex flex-wrap mb-2">
            <div className="flex items-center mb-5">
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
              {cultureReportList.map((li,i)=> <CultureReport key={i} id={li.report} deleteCultureReport={deleteCultureReport}/>) }
            </>
          )}

          {cultureSent && <div className="-mt-3 mx-3 mb-3 ">
            <button
              type="button"
              onClick={()=>addCultureReport()}
              className="bg-blue-500 text-white p-2 font-medium rounded-md shadow-lg active:shadow-sm"
            >
              Add Another Report
            </button>
          </div>}

          {/* Antibiotic used*/}

           {/* Clinical Signs correlating with Antibiotic initiation(prior 48 hours) */}
           <div className="text-lg text-white font-semibold mt-4 my-2">
           Clinical Signs correlating with Antibiotic initiation(prior 48 hours){" "}
          </div>
          <div className="flex flex-wrap mb-5 mx-1">
            {clinicalSigns.map((imp,i)=>
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0" key={i}>
              <label
                className="block capitalize tracking-wide text-sm font-bold mb-2 text-white"
                htmlFor="email"
              >
                {imp.name}
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                name="department"
                id={imp.id}
                type="text"
                placeholder={imp.placeholder}
              />
            </div>)}
          </div>

          <>
          <AntibioticUsed/>
          </>

          {/* Comments */}
          <div className="w-full md:w-5/12 mb-6 md:mb-5">
            <label
              className="label-upper"
              htmlFor=""
            >
              Comments
            </label>
            <textarea
              required
              className="input-imp"
              name="department"
              id="department"
              placeholder="Comments"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            {!loading ? (
              <button
                type="submit"
                className="px-5 py-3 bg-primary text-white rounded-md text-lg font-medium my-5"
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
        </form>
      </div>
    </div>
  );
}
