import React,{useState} from "react";

export default function Recommendation() {


    const [checkBoxList, setCheckBoxList] = useState<Object>({
      rightIndication: false,
      rightDrug: false,
      rightFrequency: false,
      rightDuration: false,
      rightMaintenanceDose: false,
    });

    
   


  return (
    <div className="form-component">
      <div className="text-white my-3 text-xl font-semibold">
        Recommendation
      </div>
      {/* give a checkbox options with 5 in a row asking for different infections */}
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        <div className="w-1/2 sm:w-1/3 px-1">
          <input type="checkbox" name="rightIndication" id="UTI" className=""/>
          <label htmlFor="infection" className="ml-2">
            Indication
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input type="checkbox" name="rightDrug" id="CNS" className="" />
          <label htmlFor="infection" className="ml-2">
            Drug
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
            Frequency
          </label>
        </div>

        <div className="w-1/2 sm:w-1/3 p-1">
          <input type="checkbox" name="abdominal" id="abdominal" className="" />
          <label htmlFor="infection" className="ml-2">
            Dose
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

        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="rightDuration"
            id="catheter_Lines_Stents"
            className=""
          />
          <label htmlFor="infection" className="ml-2">
            De Escalation
          </label>
        </div>

      </div>
    </div>
  );
}
