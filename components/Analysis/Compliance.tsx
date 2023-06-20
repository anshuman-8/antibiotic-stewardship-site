import React from "react";
import { complianceList } from "../../utils/objectList";

export default function Compliance(props) {
  const { state, setState } = props;

  const setChecked = async (e) => {
    const { name, checked } = e.target;
    await setState({ ...state, [name]: checked });
  };

  return (
    <div className="form-component">
      <div className="text-white my-3 text-xl font-semibold">Compliance</div>
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        <div className="w-1/2 sm:w-1/3 p-1">
          <input
            type="checkbox"
            name="isRecommendationFiled"
            id="isRecommendationFiled"
            className=""
            defaultChecked={true}
            onChange={(e) => setChecked(e)}
          />
          <label htmlFor="infection" className="ml-2">
            Recommendation Filed
          </label>
        </div>
        {complianceList.map((value, i) => (
          <div className="w-1/2 sm:w-1/3 p-1" key={i}>
            <input
              type="checkbox"
              name={value.name}
              id={value.name}
              className=""
              onChange={(e) => setChecked(e)}
            />
            <label htmlFor="infection" className="ml-2">
              {value.label}
            </label>
          </div>
        ))}

        <div className="w-1/2 sm:w-1/3 p-1 flex items-center">
          <label htmlFor="infection" className="mx-2">
            Serum creatinine:
          </label>
          <input
            type="number"
            name="serumCreatinine"
            id="serumCreatinine"
            value={state.serumCreatinine}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white max-w-[120px]"
            onChange={(e) =>
              setState({ ...state, serumCreatinine: parseInt(e.target.value) })
            }
          />
        </div>

        <div className="w-1/2 sm:w-1/3 p-1 flex items-center">
          {/* <label htmlFor="infection" className="mx-2">
            Comments:
          </label> */}
          <textarea
            name="comments"
            id="comments"
            placeholder="Comments..."
            value={state.comments}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-1 px-4 focus:outline-none focus:bg-white max-w-[250px]"
            onChange={(e) =>
              setState({ ...state, comments: parseInt(e.target.value) })
            }
          />
        </div>
      </div>
    </div>
  );
}
