import React from "react";

export default function InfectionFocus() {
  return (
    <div className="" id="InfectionFocus">
      <div className="mb-5">
        {/* sepsis */}
        <div className="text-white my-3 text-lg font-semibold">
          Sepsis :
          <span className="text-base mx-3 font-medium">
            Sepsis, Septic Shock
          </span>
        </div>

        {/* Focus of Infection */}
        <div className="text-white my-3 text-lg font-semibold">
          Suspected Focus Of Infection : 
          <span className="text-base mx-3 font-medium">
            UTI, CNS, Bacteremia, Pneumonia, OthersIfWritten
          </span>
        </div>
      </div>
    </div>
  );
}
