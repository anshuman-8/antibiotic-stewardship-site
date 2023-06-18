import React, { useEffect } from "react";

export default function InfectionFocus({ data }) {

  const sepsisValue = {
    isSepsis: "Sepsis",
    isSepticShock: "Septic shock",
    isNeutropenicSepsis: "Neutropenic sepsis",
  };

  return (
    <div className="" id="InfectionFocus">
      <div className="mb-5">
        {/* sepsis */}
        <div className="text-white my-3 text-lg font-semibold">
          Sepsis :
          <span className="text-base mx-3 font-medium">
            {Object.keys(data.sepsis).map((val, i) => {
              return (
                data.sepsis[val] === true && (
                  <span key={val}>{sepsisValue[val]}, {" "}</span>
                )
              );
            })}
          </span>
        </div>

        {/* Focus of Infection */}
        <div className="text-white my-3 text-lg font-semibold">
          Suspected Focus Of Infection :
          <span className="text-base mx-3 font-medium">
          {Object.keys(data.focusOfInfection).map((val, i) => {
              return (
                data.focusOfInfection[val] === true && (
                  <span key={val} className="px-1">{val.split("is")},</span>
                )
              );
            })}
            {Object.keys(data.focusOfInfection).map((val, i) => {              
              return (
                val === "other" && (
                  <span key={val} className="px-1">{data.focusOfInfection.val}</span>
                )
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
