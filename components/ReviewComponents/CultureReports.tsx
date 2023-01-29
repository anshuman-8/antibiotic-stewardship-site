import { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { BsTrashFill } from "react-icons/bs";

interface proptype {
  id: number;
}

export default function CultureReports(props: proptype) {
  const { id } = props;
  const [antibioticList, setAntibioticList] = useState<string[]>([]); // list of antibiotics selected

  return (
    <div className="border p-2 rounded-md mb-5 min-w-fit mx-3 bg-slate-600 py-4 ">
      <div className="grid grid-cols-2 gap-4 h-[20rem] overflow-y-auto overflow-x-hidden">
        {/* left column */}
        <div className="p-4 w-[20rem]">
          <div className="flex flex-row">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Culture Sent Before Antibiotics:{" "}
            </p>
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-black">
              True
            </p>
          </div>
          <div className="flex flex-row">
            <label className="label-upper" htmlFor="email">
              Site of collection:
            </label>
            <p className="text-black font-medium">{"NameOfDepartment"}</p>
          </div>
          <div className="mb-6 md:mb-0">
            <label className="label-upper" htmlFor="email">
              Organism:
            </label>
            <p>adsfsdfsd fsdfsdfsdf</p>
          </div>
          <div className=" mb-6 md:mb-0">
            <label htmlFor="specimen" className="font-semibold text-white">
              Specimen:{" "}
            </label>
            <div className="relative">sdsdfsdfsdfsdfsdsfsdf</div>
          </div>
          <div className="mb-6 md:mb-0">
            <label htmlFor="specimen" className="font-semibold text-white">
              Multi Drug Resistant Organism:
            </label>
            <div className="relative">sdfsdf ksjndfk skdfksdnf</div>
          </div>
          <div className="mb-6 md:mb-0">
            <label htmlFor="specimen" className="font-semibold text-white">
              Resistance:
            </label>
            <div className="relative">dfsdf sdf s df sdf</div>
          </div>
          <div className="col-span-2 row-span-1 flex flex-nowrap mb-5">
            <div className="text-white text-base font-semibold">Imaging: </div>
            <label htmlFor="infection" className="ml-2">
              X ray
            </label>
            <p className="max-h-36 max-w-sm">
              sdsdfsdf sd f sd f s dfsdfdsafsd f asdg adf g adf ga s fdgadfgadfg
              adf g adf adfgdf gadfgadf g
            </p>
          </div>
        </div>
        {/* right column */}
        <div className="p-4 w-[20rem]">
          <div className="flex flex-row">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Culture Sent :
            </p>
            <div className="flex flex-col text-black font-medium">
              <p>23/24/5455</p>
              <p>34:344 PM</p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Culture Reported :
            </p>
            <div className="flex flex-col text-black font-medium">
              <p>23/24/5455</p>
              <p>34:344 PM</p>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <label htmlFor="specimen" className="font-semibold text-white">
              Antibiotic Sensitivity:
            </label>
            <div className="flex flex-wrap">
              <div className="bg-slate-900/90 backdrop-blur-sm flex flex-row align-middle w-min rounded-md m-1 text-white">
                dsfsdf
              </div>
              <div className="bg-slate-900/90 backdrop-blur-sm flex flex-row align-middle w-min rounded-md m-1 text-white">
                dsfsdf
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
