import React, { useState } from "react";

interface clinicalSignType {
  date: Date;
  temp: string;
  bp: string;
  procalcitonin: string;
  wbc: string;
  neutrophils: string;
  screatinine: string;
  cratinineClerance: string;
  o2: string;
}

export default function ClinicalSign() {

  const emptyClinicalSignsValue: clinicalSignType = {
    date: new Date(),
    temp: "",
    bp: "",
    procalcitonin: "",
    wbc: "",
    neutrophils: "",
    screatinine: "",
    cratinineClerance: "",
    o2: "",
  };

  const [clinicalSignsValue, setClinicalSignsValue] = useState<
    clinicalSignType[] | []
  >([
    { ...emptyClinicalSignsValue },
    { ...emptyClinicalSignsValue },
    { ...emptyClinicalSignsValue },
    { ...emptyClinicalSignsValue },
    { ...emptyClinicalSignsValue },
    { ...emptyClinicalSignsValue },
  ]);

  const clinicalSigns = [
    {
      name: "Temp(F)",
      id: "cstempf",
      placeholder: "",
    },
    {
      name: "Blood Pressure(mmHg)",
      id: "csbp",
      placeholder: "BP",
    },
    {
      name: "O2 Saturation (%)",
      id: "csosat",
      placeholder: "",
    },
    {
      name: "White Blood Cells (K/uL)",
      id: "cswbc",
      placeholder: "",
    },
    {
      name: "CRP (mg/L)",
      id: "cscrp",
      placeholder: "",
    },
    {
      name: "Procalcitonin (ng/ml)",
      id: "csprocalc",
      placeholder: "",
    },
    {
      name: "Lactate (mmol/L)",
      id: "cslactate",
      placeholder: "",
    },
    {
      name: "S.Creatinine(mg/dl)",
      id: "cscreatinine",
      placeholder: "",
    },
    {
      name: "Neutrophils %",
      id: "csneutrophils",
      placeholder: "",
    },
    {
      name: "Platelets (109/L)",
      id: "csplatelets",
      placeholder: "",
    },
    {
      name: "Urine analysis",
      id: "csurine",
      placeholder: "",
    },
    {
      name: "CSF study",
      id: "csfstudy",
      placeholder: "",
    },
    {
      name: "Body fluid study",
      id: "csbodyfluid",
      placeholder: "",
    },
  ];

  const clinicalSignsPriority = [
    {
      name: "Procalcitonin (ng/ml)",
      id: "csprocalc",
      placeholder: "",
    },
    {
      name: "White Blood Cells (K/uL)",
      id: "cswbc",
      placeholder: "",
    },
    {
      name: "Neutrophils %",
      id: "csneutrophils",
      placeholder: "",
    },
    {
      name: "S.Creatinine(mg/dl)",
      id: "cscreatinine",
      placeholder: "",
    },
    {
      name: "Cratinine Clearance (mL/min)",
      id: "cratinineClearance",
      placeholder: "",
    },
    {
      name: "Temp(F)",
      id: "cstempf",
      placeholder: "",
    },
    {
      name: "Blood Pressure(mmHg)",
      id: "csbp",
      placeholder: "BP",
    },
    {
      name: "O2 Saturation (%)",
      id: "csosat",
      placeholder: "",
    },
  ];

  return (
    <div className="form-component">
      <div className="text-xl text-white font-semibold my-4 ">
        Clinical Signs correlating with Antibiotic initiation(prior 48 hours){" "}
      </div>
      <div className="flex flex-row mb-5 mx-1 overflow-scroll">
        <div className="flex flex-col">
          <div className="capitalize font-semibold text-white my-1 text-sm bg-slate-500 p-1 w-fit">
            Date
          </div>
          {clinicalSignsPriority.map((item, index) => {
            return (
              <div className="w-fit" key={index}>
                <div className="capitalize font-semibold text-white my-1 text-sm bg-slate-500 p-1">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        {clinicalSignsValue.map((item, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <div>Date</div>
              {clinicalSignsPriority.map((item, i) => {
                return(
                  <input className="max-w-sm p-1 m-1" key={item.id} placeholder={item.placeholder}/>
                )
              })}
            </div>
          )

        })
        }
      </div>
    </div>
  );
}
