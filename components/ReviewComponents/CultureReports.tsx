import { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { BsTrashFill } from "react-icons/bs";

interface proptype {
  id: number;
}

export default function CultureReports(props: proptype) {
  const { id } = props;
  const [antibioticList, setAntibioticList] = useState<string[]>([]);

  return (
    <div className="border p-2 rounded-md mb-5 min-w-fit mx-3 bg-slate-600 py-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* left column */}
        <div className="p-4 max-w-sm space-y-3">
          {/* 1 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Culture Sent Before Antibiotics:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm text-white">
              True
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Site of collection:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm text-white">
              {"Name Of Department"}
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Organism:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm text-white">
              adsfsdfsd fsdfsdfsdf
            </p>
          </div>

          {/* 4 */}

          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Specimen:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm  text-white">
              sdsdfsdfsdfsdfsdsfsdf
            </p>
          </div>

          {/* 5 */}

          <div className="flex flex-row justify-between items-center">
            <p className="mr-2 uppercase text-sm font-bold text-white">
              Multi Drug Resistant Organism:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm  text-white">
              sdfsdf ksjndfk
            </p>
          </div>

          {/* 6 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Resistance:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm  text-white">
              dfsdf sdf s df sdf
            </p>
          </div>
        </div>
        {/* right column */}
        <div className="p-4 w-[30rem]">
          {/* 8 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Culture Sent :
            </p>
            <div className="flex flex-col text-white">
              <p>23/24/5455</p>
              <p>34:344 PM</p>
            </div>
          </div>
          {/* 9 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Culture Reported :
            </p>
            <div className="flex flex-col text-white">
              <p>23/24/5455</p>
              <p>34:344 PM</p>
            </div>
          </div>
          {/* 10 */}
          <div className="mb-6 md:mb-0 flex flex-row justify-between">
            <label htmlFor="specimen" className="font-semibold text-white">
              Antibiotic Sensitivity:
            </label>
            <div className="flex justify-between flex-wrap">
              <div className="bg-slate-800/90 backdrop-blur-sm h-fit align-middle w-min rounded-md m-1 p-1 text-white">
                dsfsdf
              </div>
              <div className="bg-slate-800/90 backdrop-blur-sm h-fit align-middle w-min rounded-md m-1 p-1 text-white">
                dsfsdf
              </div>
             
            </div>
          </div>
           {/* 7 */}
           <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Imaging:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm  text-white">
              <label htmlFor="infection" className="font-medium block">
                X ray
              </label>
              <div className="max-h-20 rounded-md overflow-scroll bg-slate-700/30 p-1">
                sdsdfsdf sd f sd f s dfsdfdsafsd f asdg adf g adf ga s
                fdgadfgadfg adf g adf adfgdf gadfgadf g sdsdfsdf sd f sd f s
                dfsdfdsafsd f asdg adf g adf ga s fdgadfgadfg adf g adf adfgdf
                gadfgadf gsaedfs df s df sd f sdfsdfsdf sd fs df
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
