import React from 'react'

export default function Compliance(props) {
  const {state, setState} = props;

  return (
    <div className="form-component">
    <div className="text-white my-3 text-xl font-semibold">Compliance</div>
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
          checked
        />
        <label htmlFor="infection" className="ml-2">
          Recommendation Filed
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
    </div>
  </div>
  )
}
