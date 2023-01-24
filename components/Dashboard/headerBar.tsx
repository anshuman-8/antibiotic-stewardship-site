import React from "react";
import Link from "next/link";

export default function headerBar() {
  const todaysDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${day} ${months[month]} ${year}`;
  };

  return (
    <div className="flex flex-row items-center">
      <div className="m-5 font-semibold text-xl">{todaysDate()}</div>
      {/* <div className="flex">
        refresh
      </div> */}
      <div>
      <Link href="/p-register">
          <div className="bg-slate-400 px-3 py-2 mx-5 max-w-sm rounded-md shadow-xl active:shadow-sm hover:bg-gray-400">
            {" + "}Register Patient
          </div>
        </Link>
      </div>
    </div>
  );
}
