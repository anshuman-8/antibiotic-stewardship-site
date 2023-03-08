import React, { useState } from "react";
import { drugAdministeredCheck } from "../../utils/objectList";

export default function DrugReview(props) {
  const { state, setState } = props;

  const handleClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let score = 0;
    const { name, checked } = e.target;
    for (const [key, value] of Object.entries({ ...state, [name]: checked })) {
      if (value===true) {
        score += 1;
      }
    }
    await setState({ ...state, [name]: checked , score: score });

  };

  return (
    <div className="form-component">
      <div className="text-white my-3 text-xl font-semibold">
        Drug Administered Review
      </div>
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        {drugAdministeredCheck.map((item, i) => {
          return (
            <div className="w-1/2 sm:w-1/3 px-1" key={item.name}>
              <input
                type="checkbox"
                name={item.name}
                id={item.name}
                className=""
                onChange={handleClick}
              />
              <label htmlFor="infection" className="ml-2">
                {item.label}
              </label>
            </div>
          );
        })}
      

        <div className="sm:w-2/3 md:w-2/5 my-2 mx-2">
          <label htmlFor="infection" className="ml-2">
            Score:{" "}
          </label>
          <input
            disabled
            value={state.score}
            type="text"
            name="infection"
            id="infection"
            className="appearance-none  bg-gray-100 text-gray-700 border rounded py-1 px-2  leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
          />
        </div>
      </div>
    </div>
  );
}
