import React from "react";

export default function Introduction(props) {

  const {data,state,setState} =props

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
      {/* to display patient data */}
      <div className="text-white font-semibold text-lg space-y-2 my-5">
        <div>
          {" "}
          <span className="text-2xl px-1">{data.fullName}</span>
        </div>
        <div>MRD No: {data.mrdNumber}</div>
        <div>Age : {"19"}</div>
      </div>

      <div className="text-white text-lg my-3">
        <span>Review Date: </span> <span>{to_dd_mm_yyyy(new Date())}</span>
      </div>

      <div className="w-full md:w-1/3 mb-6 md:mb-5">
        <label className="label-upper" htmlFor="">
            Reviewing Doctor
        </label>
        <input
          required
          className="input-imp"
          name="reviewing-doctor"
          id="reviewing-doctor"
          type="text"
          placeholder="Dr."
          onChange={
            (e) => {
              setState(e.target.value)
            }
          }
        />
      </div>
    </div>
  );
}
