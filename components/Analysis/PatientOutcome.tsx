import React, { useState } from "react";
import { toyyyymmdd } from "../../utils/functions";

export default function OtherAnalysis(props) {
  const {state, setState} = props;

  return (
    <div className="form-component">
      <div className="text-white my-3 text-xl font-semibold">
        Patient Outcome
      </div>
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            htmlFor="infection"
            className="block tracking-wide font-bold mb-2 text-white"
          >
            Lenght of Hospital Stay
          </label>
          <input
            type="number"
            name="lenghtOfStay"
            id="lenghtOfStay"
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
            onChange={(e) => {
              setState({...state, lenghtOfStay: parseInt(e.target.value)});
            }
            }
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            htmlFor="infection"
            className="block tracking-wide font-bold mb-2 text-white"
          >
            Date of discharge
          </label>
          <input
            type="date"
            name="dateOfDischarge"
            id="dateOfDischarge"
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
            onChange={(e) => {
              setState({...state, dateOfDischarge: toyyyymmdd(e.target.valueAsDate)});
            }
            }
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            htmlFor="infection"
            className="block tracking-wide font-bold mb-2 text-white"
          >
            Outcome:
          </label>
          <div className="relative ">
            <select
              className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
              name="outcome"
              id="outcome"
              required
              defaultValue={"Select Specialization"}
              onChange={(e) => {                
                setState({...state, outcome: e.target.value});
              }
              }
            >
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
            </select>
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
