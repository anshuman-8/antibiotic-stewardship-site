import React from "react";

export default function PatientCardPlaceholder() {
  return (
    <div className="animate-pulse bg-slate-100/90 backdrop-blur-sm m-5 max-w-lg border min-w-min rounded-md p-2 ">
      <div className="bg-slate-200 h-6 my-3 max-w-xs"></div>
      <div className="bg-slate-200 h-5 mt-2 max-w-xs"></div>
      <div className=" flex flex-row space-x-4 mt-2">
        <div className="bg-slate-200 h-5 max-w-[10px] min-w-[70px]"></div>{" "}
        <div className="bg-slate-200 h-5 max-w-[100px] min-w-[70px]"></div>
      </div>

      <div className="flex space-x-5 mt-3">
        <div className="bg-slate-200 h-10 my-2 min-w-[120px] rounded-md"></div>
        <div className="bg-slate-200 h-10 my-2 min-w-[120px] rounded-md"></div>
      </div>
    </div>
  );
}
