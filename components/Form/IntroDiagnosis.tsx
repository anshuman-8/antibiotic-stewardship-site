import React from "react";

export default function IntroDiagnosis() {
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

  return (
    <div className="form-component">
      <div className="my-5 mx-2 text-white font-semibold uppercase text-2xl">
        Data Collection Form <span className="lowercase">(1123MRDnumber)</span>
      </div>
      <div className="text-white text-lg my-3">
        <span>Review Date: </span> <span>{to_dd_mm_yyyy(new Date())}</span>
      </div>

      {/* to display patient data */}
      <div className="text-white font-medium my-5">
        <div>Patient Name: Anshuman Swain</div>
      </div>

      <div className="w-full md:w-1/3 mb-6 md:mb-5">
        <label className="label-upper" htmlFor="">
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
          <label className="label-upper" htmlFor="email">
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
          <label className="label-upper" htmlFor="email">
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
          <label className="label-upper" htmlFor="email">
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
    </div>
  );
}
