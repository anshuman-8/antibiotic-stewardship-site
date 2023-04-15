import React from "react";
import { clinicalSignsPriority } from "../../utils/objectList";

export default function OldClinicalSigns({ data }) {
  return (
    <>
      {data.getClinicalSigns.map((item, index) => {
        return (
          <div className="flex flex-col striped px-1" key={item.id}>
            <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm p-1 text-center align-middle">
              {item.date}
            </div>
            {clinicalSignsPriority.map((fieldItem, i) => {
              return (
                <div key={fieldItem.id} className="">
                  <div className="max-w-[8rem] p-1 m-1 h-10 text-white font-medium rounded-sm">
                    {item[fieldItem.id]}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
