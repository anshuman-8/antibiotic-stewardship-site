import React from "react";

export default function FormIntro() {
  const toDateString = (date: Date): string => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = 0 + dd;
    }
    if (mm < 10) {
      mm = 0 + mm;
    }
    // return dd + "/" + mm + "/" + yyyy;
    return (yyyy + "-" + mm + "-" + dd).toString();
  };

  const todaysDate = toDateString(new Date());

  return (
    <div className="form-component">
      {/* to display patient data */}
      <div className="text-white font-semibold text-lg space-y-2 my-5">
        <div>
          {" "}
          <span className="text-2xl px-1">{" Anshuman Swain"}</span>
        </div>
        <div>MRD No: {"1123MRDnumber"}</div>
        <div>Age : {"19"}</div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="mb-6 md:mb-5 w-full md:w-1/2">
          <label className="label-upper">Review Date: </label>
          <input
            required
            className="appearance-none max-w-md block w-full bg-gray-100 text-gray-700 border rounded py-2  px-3 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
            type="date"
            defaultValue={todaysDate}
          />
        </div>
        <div className="mb-6 md:mb-5 w-full md:w-1/2">
          <label className="label-upper" htmlFor="">
            Reviewing Department
          </label>
          <input
            required
            className="appearance-none max-w-md block w-full bg-gray-100 text-gray-700 border rounded py-2  px-3 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
            name="department"
            id="department"
            type="text"
            placeholder="Department"
          />
        </div>
      </div>
    </div>
  );
}
