import React from 'react'

export default function ClinicalSigns() {

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
          value: "asdasdasd"
        },
        {
          name: "Body fluid study",
          id: "csbodyfluid",
          placeholder: "",
        }
      ];

  return (
    <div className='my-5'>
        <div className='flex flex-row space-x-5 mb-2'>
        <div className='font-medium text-lg text-white'>Clinical Signs</div>
        <input className='px-2 py-1 rounded-md' type={"date"} />
        </div>
        <div className="flex flex-wrap mb-5 mx-1">
            {clinicalSigns.map((imp, i) => (
              <div className=" w-full md:w-1/4 px-3 mb-6 md:mb-0 flex flex-row" key={i}>
                <label
                  className="capitalize tracking-wide text-sm font-bold mb-2 text-white "
                  htmlFor="email"
                >
                  {imp.name} :{" "}
                </label>
                <div className='text-white  mx-2'>
                    {" "}value
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}
