import React, { useState } from "react";

interface recommendationValuetype{
  name: string;
  id: string;
  placeholder: string;
  checked: boolean;
}

export default function Recommendation() {

  const [checkBoxList, setCheckBoxList] = useState<Object>({
    rightIndication: false,
    rightDrug: false,
    rightFrequency: false,
    rightDuration: false,
    rightMaintenanceDose: false,
  });

  const recommendationInitialValue  = [
    {
      name: "Indication",
      id: "rightIndication",
      placeholder: "",
      checked: false,
    },
    {
      name: "Drug",
      id: "rightDrug",
      placeholder: "",
      checked: false,
    },
    {
      name: "Frequency",
      id: "rightFrequency",
      placeholder: "",
      checked: false,
    },
    {
      name: "Dose",
      id: "rightDose",
      placeholder: "",
      checked: false,
    },
    {
      name: "Duration",
      id: "rightDuration",
      placeholder: "",
      checked: false,
    },
    {
      name: "De Escalation",
      id: "rightDeEscalation",
      placeholder: "",
      checked: false,
    },
  ];

  const [recommendationList, setRecommendationList] = useState<recommendationValuetype[]>(
    recommendationInitialValue
  );

  const setChecked = (id: string) => {
    const newRecommendationList = recommendationList.map((item: any) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setRecommendationList(newRecommendationList);
  };

  return (
    <div className="form-component">
      <div className="text-white my-3 text-xl font-semibold">
        Recommendation
      </div>
      {/* give a checkbox options with 5 in a row asking for different infections */}
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        {recommendationList.map((value, i) => (
          <div key={i} className="w-1/2 sm:w-1/3 p-1 flex flex-col">
            <div className="">
              <input
                type="checkbox"
                name={value.name}
                id={value.id}
                className=""
                onChange={() => setChecked(value.id)}
              />
              <label htmlFor="infection" className="ml-2">
                {value.name}
              </label>
            </div>
            <textarea
              disabled={!value.checked}
              // placeholder={"recommendation..."}
              className="px-2 py-1 text-gray-700 border rounded-lg focus:outline-none mr-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
