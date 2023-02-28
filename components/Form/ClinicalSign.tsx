import React, { useState, useEffect } from "react";
import { ClinicalSignType } from "../../utils/types";
import { clinicalSignsPriority } from "../../utils/objectList";

interface ClinicalSignProps {
  state: ClinicalSignType[] | [];
  setState: React.Dispatch<React.SetStateAction<ClinicalSignType[] | []>>;
}

export default function ClinicalSign(props: ClinicalSignProps) {
  const { state, setState } = props;

  const emptyClinicalSignsValue: ClinicalSignType = {
    date: new Date(),
    temp: "",
    bp: "",
    procalcitonin: "",
    wbc: "",
    neutrophils: "",
    screatinine: "",
    cratinineClerance: "",
    o2: "",
  };

  useEffect(() => {
    const today: Date = new Date();
    const pastSixDays: Date = new Date();
    pastSixDays.setDate(today.getDate() - 6);
    const dates = [];
    for (let d = today; d >= pastSixDays; d.setDate(d.getDate() - 1)) {
      dates.push(new Date(d));
    }
    console.log(dates);
    const newClinicalSignsValue = dates.map((date) => {
      return {
        ...emptyClinicalSignsValue,
        date,
      };
    });
    setState(newClinicalSignsValue);
  }, []);

  return (
    <div className="form-component">
      <div className="text-xl text-white font-semibold my-4 ">
        Clinical Signs correlating with Antibiotic initiation(prior 48 hours){" "}
      </div>
      <div className="flex flex-row mb-5 mx-1">
        <div className="flex flex-col striped">
          <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm p-1 flex items-center">
            Date
          </div>
          {clinicalSignsPriority.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm flex items-center">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex overflow-scroll px-2">
          {state.map((item, index) => {
            return (
              <div className="flex flex-col striped" key={index}>
                <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm p-1 text-center align-middle">
                  {item.date.toLocaleDateString() +
                    " " +
                    item.date.toLocaleDateString("en-US", { weekday: "short" })}
                </div>
                {clinicalSignsPriority.map((fieldItem, i) => {
                  return (
                    <div key={fieldItem.id}>
                      <input
                        className="max-w-[10rem] p-1 m-1 h-10 rounded-sm"
                        placeholder={item.placeholder}
                        name={fieldItem.id}
                        type="text"
                        // value={item.value}
                        onChange={(e) => {
                          const value = e.target.value;
                          const newState = state.map((stateItem, index) => {
                            if (item.date === stateItem.date) {
                              console.log(fieldItem.id,"  ", value);
                              return {
                                ...stateItem,
                                [fieldItem.id]: value,
                              };
                            }
                            return stateItem;
                          });
                          console.log(newState);
                          setState(newState);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
