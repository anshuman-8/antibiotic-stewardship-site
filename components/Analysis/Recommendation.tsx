import React, { useState } from "react";
import {recommendationInitialValue} from "../../utils/objectList";

interface recommendationValuetype {
  name: string;
  label: string;
  placeholder: string;
  checked: boolean;
}

export default function Recommendation(props) {
  const {state, setState} = props;


  const [recommendationList, setRecommendationList] = useState<
    recommendationValuetype[]
  >(recommendationInitialValue);

  const setChecked = (name: string) => {
    const newRecommendationList = recommendationList.map((item: any) => {
      if (item.name === name) {
        item.checked = !item.checked;
        const newName = "is"+name;
        setState({...state, [newName]: item.checked})
      }
      return item;
    });
    setRecommendationList(newRecommendationList);
  };

  const setContent= (name:string,e)=>{

    setState({...state, [name]: e.target.value})
   console.log(state);
   
  }

  return (
    <div className="form-component">
      <div className="text-white my-3 text-xl font-semibold">
        Recommendation
      </div>
      <div className="w-full flex flex-wrap font-medium text-white px-5">
        {recommendationList.map((value, i) => (
          <div key={i} className="w-1/2 sm:w-1/3 p-1 flex flex-col">
            <div className="">
              <input
                type="checkbox"
                name={value.name}
                id={value.name}
                className=""
                onChange={() => setChecked(value.name)}
              />
              <label htmlFor="infection" className="ml-2">
                {value.label}
              </label>
            </div>
            {/* <textarea
              disabled={!value.checked}
              // placeholder={"recommendation..."}
              className="px-2 py-1 text-gray-700 border rounded-lg focus:outline-none mr-2"
            /> */}
            {value.checked ? (
              <textarea className="px-2 py-1 text-gray-700 border rounded-lg focus:outline-none mr-2" onChange={(e)=>setContent(value.name,e)}></textarea>
            ) : (
              <textarea className="px-2 py-1 text-gray-700 border rounded-lg bg-gray-200 focus:outline-none mr-2 cursor-not-allowed"  disabled></textarea>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
