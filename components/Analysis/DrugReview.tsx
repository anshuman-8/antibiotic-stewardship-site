import React,{useState} from "react";

export default function DrugReview() {

    const [score, setScore] = React.useState(0);
    const [checkBoxList, setCheckBoxList] = useState<Object>({
      rightIndication: false,
      rightDrug: false,
      rightFrequency: false,
      rightDuration: false,
      rightMaintenanceDose: false,
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

    const handleClick = async(e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      console.log(checked)
      await setCheckBoxList({ ...checkBoxList, [name]: checked });
      // handleScore(checkBoxList)
      console.log(checkBoxList);
    };

  return (
    <div className="">
      <div className="text-white my-3 text-base font-semibold">
        Drug Administered Review
      </div>
      {/* give a checkbox options with 5 in a row asking for different infections */}
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        <div className="w-1/2 sm:w-1/3 px-1">
          <input type="checkbox" name="rightIndication" id="UTI" className="" onChange={handleClick}/>
          <label htmlFor="infection" className="ml-2">
            Right Indication
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input type="checkbox" name="rightDrug" id="CNS" className="" onChange={handleClick}/>
          <label htmlFor="infection" className="ml-2">
            Right Drug
          </label>
        </div>
        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightFrequency"
            id="skinAndSoftTissue"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right Frequency
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input type="checkbox" name="abdominal" id="abdominal" className="" />
          <label htmlFor="infection" className="ml-2">
            Right loading Dose
          </label>
        </div>
        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightMaintenanceDose"
            id="bacteremia"
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
            id="catheter_Lines_Stents"
            className=""
            onChange={handleClick}
          />
          <label htmlFor="infection" className="ml-2">
            Right Duration
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
