import React from 'react'

export default function ClinicalSign() {

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
        // {
        //   name:"",
        //   id:"",
        //   placeholder:""
        // },
      ];

  return (
    <div className='form-component'>
       <div className="text-lg text-white font-semibold mt-4 my-2">
            Clinical Signs correlating with Antibiotic initiation(prior 48
            hours){" "}
          </div>
          <div className="flex flex-wrap mb-5 mx-1">
            {clinicalSigns.map((imp, i) => (
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
              </div>
            ))}
          </div>
    </div>
  )
}
