import React, { useState } from "react";

export default function OtherAnalysis() {
  const [checkBoxList, setCheckBoxList] = useState<Object>({
    rightIndication: false,
    rightDrug: false,
    rightFrequency: false,
    rightDuration: false,
    rightMaintenanceDose: false,
  });

  return (
    <div className="form-component">
      <div className="text-white my-3 text-xl font-semibold">Others</div>
      {/* give a checkbox options with 5 in a row asking for different infections */}
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        <div className="w-1/2 sm:w-1/3 px-1">
          <input type="checkbox" name="rightIndication" id="UTI" className="" />
          <label htmlFor="infection" className="ml-2">
            Appropriatness
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input type="checkbox" name="rightDrug" id="CNS" className="" />
          <label htmlFor="infection" className="ml-2">
            Right Documentation
          </label>
        </div>
        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightFrequency"
            id="skinAndSoftTissue"
            className=""
          />
          <label htmlFor="infection" className="ml-2">
            Recommendation Field
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input type="checkbox" name="abdominal" id="abdominal" className="" />
          <label htmlFor="infection" className="ml-2">
            Antibiotic Changed
          </label>
        </div>
        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightMaintenanceDose"
            id="bacteremia"
            className=""
          />
          <label htmlFor="infection" className="ml-2">
            Antibiotic Dose Changed
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightDuration"
            id="catheter_Lines_Stents"
            className=""
          />
          <label htmlFor="infection" className="ml-2">
            Complance
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightMaintenanceDose"
            id="bacteremia"
            className=""
          />
          <label htmlFor="infection" className="ml-2">
            Duration
          </label>
        </div>


        <div className="w-1/2 sm:w-1/3 p-1 flex items-center">
         
          <label htmlFor="infection" className="mx-2">
             Serum creatinine:
          </label>
          <input
            type="number"
            name="rightMaintenanceDose"
            id="bacteremia"
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white max-w-[120px]"

          />
        </div>


        <div className="w-1/2 sm:w-1/3 p-1 flex items-center">
         
          <label htmlFor="infection" className="mx-2">
             Duration(Days):
          </label>
          <input
            type="number"
            name="rightMaintenanceDose"
            id="bacteremia"
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white max-w-[120px]"

          />
        </div>

        <div className="w-1/2 sm:w-1/3 p-1 flex items-center">
          <label htmlFor="infection" className="mx-2">
            Outcome: 
          </label>
          <div className="relative mt-3  min-w-[110px] max-w-[120px]">
            <select
              className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white"
              name="branch"
              id="grid-branch"
              required
              defaultValue={"Select Specialization"}
            >
              {/* <option value="Select Specialization" disabled>
                Select
              </option> */}
              <option value="Blood">Alive</option>
              <option value="Blood">Dead</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
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
