import React from 'react'

interface DiagnosisProps {
  state: any;
  setState: any;
}

export default function Diagnosis(props) {

  const { state, setState } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({ ...state, [name]: value });
    
    setState({ ...state, [name]: value });
  };

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
            value={state.provisionalDiagnosis}
            onChange={handleChange}
            className="input-imp"
            name="provisionalDiagnosis"
            id="provisionalDiagnosis"
            placeholder=""
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Final diagnosis:
          </label>
          <textarea
            required
            value={state.finalDiagnosis}
            onChange={handleChange}
            className="input-imp"
            name="finalDiagnosis"
            id="finalDiagnosis"
            placeholder=""
          />
        </div>

        <div className="w-full md:w-3/12 md:pl-3 md:pr-1 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Syndromic diagnosis:
          </label>
          <textarea
            required
            value={state.syndromicDiagnosis}
            onChange={handleChange}
            className="input-imp"
            name="syndromicDiagnosis"
            id="syndromicDiagnosis"
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
              onChange={handleChange}
              // value={state.syndromicOptions}
              value={state.syndromicOptions}
              className="input-imp"
              name="syndromicOptions"
              id="syndromicOptions"
              required
              defaultValue={""}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="probable">Probable</option>
              <option value="definite">Definite</option>
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
