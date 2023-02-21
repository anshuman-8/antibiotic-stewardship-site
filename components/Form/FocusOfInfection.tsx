import React from "react";

export default function focusOfInfection(props) {

  const { state, setState } = props;
  
  const handleChange = (e) => {
    const name = e.target.name;
    // console.log({ ...state, [name]: e.target.checked });
 
    setState({ ...state, [name]: e.target.checked });
  };

  return (
    <div className="form-component">
      <div className="mb-5">

        {/* sepsis */}
        <div className="text-white my-3 text-xl font-semibold">Sepsis</div>
        {/* Options for Sepsis */}
        <div className="w-full flex flex-wrap font-medium mb-5 text-white">
          <div className="w-1/2 sm:w-1/3  p-1">
            <input type="checkbox" name="sepsis" id="sepsis" className="" onChange={handleChange}/>
            <label htmlFor="infection" className="ml-2">
              Sepsis
            </label>
          </div>
          <div className="w-1/2 sm:w-1/3 p-1">
            <input
              type="checkbox"
              onChange={handleChange}
              name="septicShock"
              id="septicShock"
              className=""
            />
            <label htmlFor="infection" className="ml-2">
              Septic shock
            </label>
          </div>
          <div className="w-1/2 sm:w-1/3 p-1">
            <input
              type="checkbox"
              onChange={handleChange}
              name="neutropenicSepsis"
              id="neutropenicSepsis"
              className=""
            />
            <label htmlFor="infection" className="ml-2">
              Neutropenic sepsis
            </label>
          </div>
        </div>

        {/* Focus of Infection */}
        <div className="text-white my-3 text-xl font-semibold">
          Suspected Focus Of Infection
        </div>
        {/* Options for Suspect of Infection */}
        <div className="w-full flex flex-wrap font-medium text-white">
          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
            <input type="checkbox" name="UTI" id="UTI" className="" onChange={handleChange} />
            <label htmlFor="infection" className="ml-2">
              UTI
            </label>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
            <input type="checkbox" name="CNS" id="CNS" className="" onChange={handleChange}/>
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="infection" className="ml-2">
              Abdominal
            </label>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
            <input
              type="checkbox"
              name="primaryBacteremia"
              id="primaryBacteremia"
              className=""
              onChange={handleChange}
            />
            <label htmlFor="infection" className="ml-2">
              Primary Bacteremia
            </label>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
            <input
              type="checkbox"
              name="secondaryBacteremia"
              id="secondaryBacteremia"
              className=""
              onChange={handleChange}
            />
            <label htmlFor="infection" className="ml-2">
              Secondary Bacteremia
            </label>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
            <input
              type="checkbox"
              name="catheterLinesStens"
              id="catheterLinesStens"
              className=""
              onChange={handleChange}
            />
            <label htmlFor="infection" className="ml-2">
              Catheter/ Lines/ Stents
            </label>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-1">
            <input
              type="checkbox"
              name="pneumonia"
              id="pneumonia"
              className=""
              onChange={handleChange}
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
              onChange={(e)=>{setState({...state, other: e.target.value})}}
              value={state.other}
              id="infection"
              className="appearance-none  bg-gray-100 text-gray-700 border rounded py-1 px-2  leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
