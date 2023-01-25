import React from 'react'

export default function Diagnosis() {
  return (
    <div className='form-component'>
       {/* Diagnosis */}
       <div className="text-xl text-white font-semibold mt-2 my-1">
        Diagnosis{" "}
      </div>
      <div className="flex flex-wrap mb-5 mx-1">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Provisional diagnosis:
          </label>
          <textarea
            required
            className="input-imp"
            name="provisional_diagnosis"
            id="provisional_diagnosis"
            placeholder=""
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Final diagnosis:
          </label>
          <textarea
            required
            className="input-imp"
            name="final_diagnosis"
            id="provisional_diagnosis"
            placeholder=""
          />
        </div>

        <div className="w-full md:w-3/12 md:pl-3 md:pr-1 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Syndromic diagnosis:
          </label>
          <textarea
            required
            className="input-imp"
            name="syndromic_diagnosis"
            id="syndromic_diagnosis"
            placeholder=""
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
  )
}
