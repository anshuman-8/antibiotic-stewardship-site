import React, { useState } from "react";

export default function DrugReview() {
  const [score, setScore] = React.useState(0);
  const [checkBoxList, setCheckBoxList] = useState<Object>({
    rightIndication: false,
    rightDrug: false,
    rightFrequency: false,
    rightDuration: false,
    rightMaintenanceDose: false,
    rightLoadingDose: false,
    appropriateness0: false,
    rightDocumentation: false,
  });

  React.useEffect(() => {
    let score = 0;
    for (const [key, value] of Object.entries(checkBoxList)) {
      if (value) {
        score += 1;
      }
    }
    setScore(score);
  }, [checkBoxList]);

  const handleClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    await setCheckBoxList({ ...checkBoxList, [name]: checked });
  };

  return (
    <div className="form-component">
      <div className="text-white my-3 text-xl font-semibold">
        Drug Administered Review
      </div>
      {/* give a checkbox options with 5 in a row asking for different infections */}
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        <div className="w-1/2 sm:w-1/3 px-1">
          <input
            type="checkbox"
            name="rightIndication"
            id="rightIndication"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right Indication
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightDrug"
            id="CNS"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right Drug
          </label>
        </div>
        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightFrequency"
            id="rightFrequency"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right Frequency
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightLoadingDose"
            id="rightLoadingDose"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right loading Dose
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightMaintenanceDose"
            id="rightMaintenanceDose"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right maintenance Dose
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightDuration"
            id="rightDuration"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right Duration
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="Appropiatness"
            id="Appropiatness"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Appropiatness
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightDocumentation"
            id="rightDocumentation"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right Documentation
          </label>
        </div>

        <div className="sm:w-2/3 md:w-2/5 my-2 mx-2">
          <label htmlFor="infection" className="ml-2">
            Score:{" "}
          </label>
          <input
            disabled
            value={score}
            type="text"
            name="infection"
            id="infection"
            className="appearance-none  bg-gray-100 text-gray-700 border rounded py-1 px-2  leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
          />
        </div>
      </div>
    </div>
  );
}
