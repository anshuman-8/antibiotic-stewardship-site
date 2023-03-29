import React from "react";
import { ClinicalSignType } from "../../utils/types";
import { clinicalSignsPriority } from "../../utils/objectList";
import { GrAdd } from "react-icons/gr";

interface ClinicalSignProps {
  state: ClinicalSignType[] | [];
  setState: React.Dispatch<React.SetStateAction<ClinicalSignType[] | []>>;
}

export default function ClinicalSign(props: ClinicalSignProps) {
  const { state, setState } = props;


  const addColumn = () => {
    setState([
      ...state,
      {
        date: new Date(),
        procalcitonin: "",
        neutrophil : "",
        bloodPressure : "",
        o2Saturation : "",
        whiteBloodCell : "",
        sCreatinine : "",
        cratinineClearance : "",
        temperature : "",
      },
    ]);
  };

  const listName = [
    "date",
    "temperature",
    "bloodPressure",
    "procalcitonin",
    "whiteBloodCell",
    "neutrophil",
    "sCreatinine",
    "cratinineClearance",
    "o2Saturation",
  ];


  return (
    <div className="form-component">
      <div className="text-xl text-white font-semibold my-4 flex flex-row">
        <span>
          Clinical Signs correlating with Antibiotic initiation(prior 48 hours){" "}
        </span>
        <GrAdd
          className="bg-white/60 h-7 w-7 rounded-md hover shadow-lg active:shadow-none border-2 border-stone-100 mx-3"
          onClick={addColumn}
        />
      </div>
      <div className="flex flex-row mb-5 mx-1">
        <div className="flex flex-col striped">
          <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm p-1 flex items-center">
            Date
          </div>
          {clinicalSignsPriority.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm flex items-center">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex overflow-x-scroll px-2">
          {state.map((item, index) => {
            return (
              <div key={index} className="flex flex-col striped">
                {listName.map((fieldItem, i) => {
                  return (
                    <div key={index}>
                      <input
                        className="max-w-[8rem] p-1 m-1 h-10 rounded-sm"
                        name={fieldItem}
                        title={fieldItem}
                        type={fieldItem==="date"?"date":"text"}
                        onChange={(e) => {
                          const name = e.target.name;
                          const value = e.target.value;
                          const updatedState = [...state];
                          updatedState[index][name] = value;
                          setState(updatedState);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// useEffect(() => {
//   const today: Date = new Date();
//   const pastSixDays: Date = new Date();
//   pastSixDays.setDate(today.getDate() - 6);
//   const dates = [];
//   for (let d = today; d >= pastSixDays; d.setDate(d.getDate() - 1)) {
//     dates.push(new Date(d));
//   }
//   const newClinicalSignsValue = dates.map((date) => {
//     return {
//       ...emptyClinicalSignsValue,
//       date,
//     };
//   });
//   setState(newClinicalSignsValue);
// }, []);

// {state.map((item, index) => {
//   return (
//     <div className="flex flex-col striped" key={index}>
//       <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm p-1 text-center align-middle">
//         {item.date.toLocaleDateString() +
//           " " +
//           item.date.toLocaleDateString("en-US", { weekday: "short" })}
//       </div>
//       {clinicalSignsPriority.map((fieldItem, i) => {
//         return (
//           <div key={fieldItem.id}>
//             <input
//               className="max-w-[8rem] p-1 m-1 h-10 rounded-sm"
//               placeholder={item.placeholder}
//               name={fieldItem.id}
//               title = {fieldItem.id}
//               type="text"
//               onChange={(e) => {
//                 const value = e.target.value;
//                 const newState = state.map((stateItem, index) => {
//                   if (item.date === stateItem.date) {
//                     return {
//                       ...stateItem,
//                       [fieldItem.id]: value,
//                     };
//                   }
//                   return stateItem;
//                 });
//                 setState(newState);
//               }}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// })}
