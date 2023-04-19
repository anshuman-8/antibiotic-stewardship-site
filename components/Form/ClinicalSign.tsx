import React from "react";
import { ClinicalSignType } from "../../utils/types";
import { clinicalSignsPriority } from "../../utils/objectList";
import { GrAdd } from "react-icons/gr";
import { gql, useQuery } from "@apollo/client";
import { toyyyymmdd } from "../../utils/functions";
import OldClinicalSigns from "./OldClinicalSigns";

interface ClinicalSignProps {
  state: ClinicalSignType[] | [];
  setState: React.Dispatch<React.SetStateAction<ClinicalSignType[] | []>>;
  patient: string | string[];
  date: Date;
}

export default function ClinicalSign(props: ClinicalSignProps) {
  const { state, setState, patient, date } = props;

  const addColumn = () => {
    setState([
      ...state,
      {
        date: new Date(),
        procalcitonin: "",
        neutrophil: "",
        bloodPressure: "",
        o2Saturation: "",
        whiteBloodCell: "",
        sCreatinine: "",
        cratinineClearance: "",
        temperature: "",
      },
    ]);
  };

  const GET_CLINICAL_SIGN = gql`
    query ($patient: ID!, $startDate: String!, $endDate: String!) {
      getClinicalSigns(
        patient: $patient
        startDate: $startDate
        endDate: $endDate
      ) {
        id
        patient {
          id
          fullName
        }
        neutrophil
        bloodPressure
        o2Saturation
        date
        procalcitonin
        whiteBloodCell
        sCreatinine
        cratinineClearance
        temperature
      }
    }
  `;

  const listName = [
    "date",
    "procalcitonin",
    "whiteBloodCell",
    "neutrophil",
    "sCreatinine",
    "cratinineClearance",
    "temperature",
    "bloodPressure",
    "o2Saturation",
  ];

  const sevenDaysPriorClinicalSigns = (date) => {
    const sevenDaysPrior = new Date(date);
    sevenDaysPrior.setDate(sevenDaysPrior.getDate() - 7);
    return toyyyymmdd(sevenDaysPrior);
  };

  const addOneDay = (date) => {
    const oneDay = new Date(date);
    oneDay.setDate(oneDay.getDate() + 1);
    return toyyyymmdd(oneDay);
  };

  const { loading, error, data } = useQuery(GET_CLINICAL_SIGN, {
    variables: {
      patient: patient,
      startDate: sevenDaysPriorClinicalSigns(date),
      endDate: addOneDay(date),
    },
  });

  return (
    <div className="form-component">
      <div className="text-xl text-white font-semibold my-4 flex flex-row">
        <span>
          Clinical Signs correlating with Antibiotic initiation(prior 48 hours){" "}
        </span>
        <GrAdd
          className="bg-white/60 h-7 w-7 rounded-md hover shadow-lg active:shadow-none border-2 border-stone-100 mx-3"
          onClick={addColumn}
        />
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
        <div className="flex overflow-x-scroll px-2">
          {loading ? <></> : <OldClinicalSigns data={data} />}
          {state.map((item, index) => {
            return (
              <div key={index + 8} className="flex flex-col">
                <div className="flex flex-col striped">
                  {listName.map((fieldItem, i) => {
                    return (
                      <div key={index}>
                        <input
                          className="max-w-[8rem] p-1 m-1 h-10 rounded-sm"
                          name={fieldItem}
                          title={fieldItem}
                          type={fieldItem === "date" ? "date" : "text"}
                          onChange={(e) => {
                            const name = e.target.name;
                            const value = e.target.value;
                            const updatedState = [...state];
                            updatedState[index][name] = value;
                            setState(updatedState);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div
                  className="bg-red-500 text-base px-2 py-1 m-2 text-white rounded-lg cursor-pointer hover:bg-red-600"
                  onClick={() => {
                    const updatedState = [...state];
                    updatedState.splice(index, 1);
                    setState(updatedState);
                  }}
                >
                  Remove
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
