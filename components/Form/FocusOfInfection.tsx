import React from 'react'

export default function focusOfInfection() {
  return (
    <div className='form-component'>
      <div className="mb-5">
            <div className="text-white my-3 text-base font-semibold">
              Suspected Focus Of Infection
            </div>
            {/* give a checkbox options with 5 in a row asking for different infections */}
            <div className="w-full flex flex-wrap font-medium text-white">
              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input type="checkbox" name="UTI" id="UTI" className="" />
                <label htmlFor="infection" className="ml-2">
                  UTI
                </label>
              </div>

              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input type="checkbox" name="CNS" id="CNS" className="" />
                <label htmlFor="infection" className="ml-2">
                  CNS
                </label>
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="skinAndSoftTissue"
                  id="skinAndSoftTissue"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Skin And Soft Tissue
                </label>
              </div>

              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="abdominal"
                  id="abdominal"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Abdominal
                </label>
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="bacteremia"
                  id="bacteremia"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Bacteremia
                </label>
              </div>

              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="catheter_Lines_Stents"
                  id="catheter_Lines_Stents"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Catheter Lines Stents
                </label>
              </div>

              <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
                <input
                  type="checkbox"
                  name="pneumonia"
                  id="pneumonia"
                  className=""
                />
                <label htmlFor="infection" className="ml-2">
                  Pneumonia
                </label>
              </div>
              <div className="w-full sm:w-2/3 md:w-2/5 my-2 mx-2">
                <label htmlFor="infection" className="ml-2">
                  Others:{" "}
                </label>
                <input
                  type="text"
                  name="infection"
                  id="infection"
                  className="appearance-none  bg-gray-100 text-gray-700 border rounded py-1 px-2  leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                />
              </div>
            </div>
          </div>
    </div>
  )
}
