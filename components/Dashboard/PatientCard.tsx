import React from "react";
import Link from "next/link";

interface propType {}

export default function patientCard() {
  return (
    <div className="bg-slate-100/50 backdrop-blur-sm m-5 max-w-lg border min-w-min rounded-md p-2">
      <div className="text-xl my-1">Anshuman Swain</div>
      <div>MRD No: AER23434</div>
      <div className="space-x-5">
        {" "}
        <span> Age: 19 </span> <span>Sex: M</span>
      </div>

      <div className="space-x-5 mt-5 mb-2 flex flex-row">
        <Link href="/form">
          <button className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400">
            Patient Form
          </button>
        </Link>
        <Link href="/analysis">
          <button className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400">
            Analysis Form
          </button>
        </Link>
      </div>
    </div>
  );
}
