import React from "react";
import { clinicalSignsPriority } from "../../utils/objectList";
import { useQuery, gql } from "@apollo/client";
import { toyyyymmdd } from "../../utils/functions";

export default function ClinicalSigns({ date , patient}) {

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
      }
    }
  `;

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
    patient : patient,
    startDate :  sevenDaysPriorClinicalSigns(date),
    endDate : addOneDay(date)
  },
});

console.log("dates", sevenDaysPriorClinicalSigns(date), addOneDay(date));


console.log("clinical signs", data);

if (loading) return <p>Loading ...</p>;

if (error) return <p>Error :(</p>;

  return (
    <div className="form-component">
      <div className="text-xl text-white font-semibold my-4 ">
        Clinical Signs correlating with Antibiotic initiation(prior 48 hours){" "}
      </div>
      <div className="flex flex-row mb-5 mx-1">
        <div className="flex flex-col striped">
          <div className="capitalize font-semibold h-8 w-[100%] text-white my-1 text-sm p-1 flex items-center">
            Date
          </div>
          {clinicalSignsPriority.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="capitalize font-semibold h-6 w-[100%] text-white my-1 text-sm flex items-center">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex overflow-x-scroll px-2">
          {data.getClinicalSigns.map((item, index) => {
            return (
              <div className="flex flex-col striped" key={index}>
                <div className="capitalize font-semibold h-8 w-[100%] text-white my-1 text-sm p-1 text-center align-middle">
                  {item.date}
                </div>
                {clinicalSignsPriority.map((fieldItem, i) => {
                  return (
                    <div key={fieldItem.id} className="">
                      <div className="max-w-[10rem] m-1 h-6 rounded-sm text-white">
                        {item[fieldItem.name]}
                      </div>
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
