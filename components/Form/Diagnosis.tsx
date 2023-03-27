import React from 'react'

interface DiagnosisProps {
  state: any;
  setState: any;
}

export default function Diagnosis(props) {

  const { state, setState } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
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
              defaultValue={""}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="probable">Probable</option>
              <option value="definite">Definite</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
