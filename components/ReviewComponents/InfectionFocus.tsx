import React, { useEffect } from "react";

export default function InfectionFocus({ data }) {
  const sepsisVal = [];

  useEffect(() => {
    // for(const key in data.sepsis){
    //   if (data.sepsis[key]===true){
    //     sepsisVal.push(key)
    //   }
    // }
    // console.log(sepsisVal,"is here");
  });

  return (
    <div className="" id="InfectionFocus">
      <div className="mb-5">
        {/* sepsis */}
        <div className="text-white my-3 text-lg font-semibold">
          Sepsis :
          <span className="text-base mx-3 font-medium">
            {Object.keys(data.sepsis).map((val, i) => {
              return data.sepsis[val] === true ? val.split("is") : "";
            })}
          </span>
        </div>

        {/* Focus of Infection */}
        <div className="text-white my-3 text-lg font-semibold">
          Suspected Focus Of Infection :
          <div className="text-base mx-3 font-medium">
          {/* {Object.keys(data.focusOfInfection).map((val, i) => 
              data.focusOfInfection[val] === true && {
                return(<span >{}</span>)
              } 
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
