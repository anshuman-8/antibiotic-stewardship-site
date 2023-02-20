import React, { useState, useEffect } from "react";

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
  >([]);

  useEffect(() => {
    const today: Date = new Date();
    const pastSixDays: Date = new Date();
    pastSixDays.setDate(today.getDate() - 6);
    const dates = [];
    for (let d = today; d >= pastSixDays; d.setDate(d.getDate() - 1)) {
      dates.push(new Date(d));
    }
    console.log(dates);
    const newClinicalSignsValue = dates.map((date) => {
      return {
        ...emptyClinicalSignsValue,
        date,
      };
    });
    setClinicalSignsValue(newClinicalSignsValue);
  }, []);

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
      placeholder: "",
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
      <div className="flex flex-row mb-5 mx-1">
        <div className="flex flex-col striped">
          <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm p-1 flex items-center">
            Date
          </div>
          {clinicalSignsPriority.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm flex items-center">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex overflow-scroll px-2">
          {clinicalSignsValue.map((item, index) => {
            return (
              <div className="flex flex-col striped" key={index}>
                <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm p-1 text-center align-middle">
                  {item.date.toLocaleDateString() +
                    " " +
                    item.date.toLocaleDateString("en-US", { weekday: "short" })}
                </div>
                {clinicalSignsPriority.map((item, i) => {
                  return (
                    <div key={item.id}>
                      <input
                        className="max-w-[10rem] p-1 m-1 h-10 rounded-sm"
                        placeholder={item.placeholder}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
