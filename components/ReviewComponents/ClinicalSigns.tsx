import React from 'react'
import { clinicalSignsPriority } from "../../utils/objectList";


export default function ClinicalSigns({data}) {


  const [clinicalSignList, setClinicalSignList] = React.useState([data]);

  

  return(
    <div className="form-component">
      <div className="text-xl text-white font-semibold my-4 ">
        Clinical Signs correlating with Antibiotic initiation(prior 48 hours){" "}
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
        {/* <div className="flex overflow-scroll px-2">
          {state.map((item, index) => {
            return (
              <div className="flex flex-col striped" key={index}>
                <div className="capitalize font-semibold h-10 w-[100%] text-white my-1 text-sm p-1 text-center align-middle">
                  {item.date.toLocaleDateString() +
                    " " +
                    item.date.toLocaleDateString("en-US", { weekday: "short" })}
                </div>
                {clinicalSignsPriority.map((fieldItem, i) => {
                  return (
                    <div key={fieldItem.id}>
                      <span
                        className="max-w-[10rem] p-1 m-1 h-10 rounded-sm"
                        placeholder={item.placeholder}
                        onChange={(e) => {
                          const value = e.target.value;
                          const newState = state.map((stateItem, index) => {
                            if (item.date === stateItem.date) {
                              console.log(fieldItem.id,"  ", value);
                              return {
                                ...stateItem,
                                [fieldItem.id]: value,
                              };
                            }
                            return stateItem;
                          });
                          console.log(newState);
                          setState(newState);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}






//   return (
//     <div className='my-5'>
//         <div className='flex flex-row space-x-5 mb-2'>
//         <div className='font-medium text-lg text-white'>Clinical Signs</div>
//         <input className='px-2 py-1 rounded-md' type={"date"} />
//         </div>
//         <div className="flex flex-wrap mb-5 mx-1">
//             {clinicalSigns.map((imp, i) => (
//               <div className=" w-full md:w-1/4 px-3 mb-6 md:mb-0 flex flex-row" key={i}>
//                 <label
//                   className="capitalize tracking-wide text-sm font-bold mb-2 text-white "
//                   htmlFor="email"
//                 >
//                   {imp.name} :{" "}
//                 </label>
//                 <div className='text-white  mx-2'>
//                     {" "}value
//                 </div>
//               </div>
//             ))}
//           </div>
//     </div>
//   )
// }
