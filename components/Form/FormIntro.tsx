import React from "react";

export default function FormIntro() {
  const to_dd_mm_yyyy = (date: Date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = 0 + dd;
    }
    if (mm < 10) {
      mm = 0 + mm;
    }
    return dd + "/" + mm + "/" + yyyy;
  };

  return (
    <div className="form-component">
      <div className="my-5 mx-2 text-white font-semibold uppercase text-2xl">
        Data Collection Form <span className="lowercase">(1123MRDnumber)</span>
      </div>
      <div className="text-white text-lg my-3">
        <span>Review Date: </span> <span>{to_dd_mm_yyyy(new Date())}</span>
      </div>

      {/* to display patient data */}
      <div className="text-white font-semibold text-xl  my-5">
        <div>Name: Anshuman Swain</div>
        <div>MRD Number: 1123MRDnumber</div>
      </div>

      <div className="w-full md:w-1/3 mb-6 md:mb-5">
        <label className="label-upper" htmlFor="">
          Reviewing Department
        </label>
        <input
          required
          className="input-imp"
          name="department"
          id="department"
          type="text"
          placeholder="Department"
        />
      </div>
    </div>
  );
}
