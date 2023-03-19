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
          <div className="capitalize font-semibold h-8 w-[100%] text-white my-1 text-sm p-1 flex items-center">
            Date
          </div>
          {clinicalSignsPriority.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="capitalize font-semibold h-6 w-[100%] text-white my-1 text-sm flex items-center">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex overflow-x-scroll px-2">
          {clinicalSignList.map((item, index) => {
            return (
              <div className="flex flex-col striped" key={index}>
                <div className="capitalize font-semibold h-8 w-[100%] text-white my-1 text-sm p-1 text-center align-middle">
                  {/* {item.date.toLocaleDateString() +
                    " " +
                    item.date.toLocaleDateString("en-US", { weekday: "short" })} */}
                    date
                </div>
                {clinicalSignsPriority.map((fieldItem, i) => {
                  return (
                    <div key={fieldItem.id} className=''>
                      <div
                        className="max-w-[10rem] m-1 h-6 rounded-sm text-white"
                      >34.05</div>
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
