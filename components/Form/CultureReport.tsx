import { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import {BsTrashFill} from "react-icons/bs"


export default function CultureReport(props) {

  const {id, deleteCultureReport} = props;
  const [antibioticList, setAntibioticList] = useState([]); // list of antibiotics selected

  const handleAntibioticChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const name = e.target.value;
    if (!antibioticList.includes(name)) {
      setAntibioticList([...antibioticList, name]);
    }
  };

  const removeAntibiotic = (name: string) => {
    const newAntibioticList = antibioticList.filter(
      (antibiotic) => antibiotic !== name
    );
    setAntibioticList(newAntibioticList);
  };

  const antibioticFullList = [
    { id: "AMX_CLAV", name: "Amoxicillin/Clavulanate" },
    { id: "AMP", name: "Ampicillin" },
    { id: "GEN", name: "Gentamicin" },
    { id: "COTRI", name: "Co-trimoxazole" },
    { id: "CIP", name: "Ciprofloxacin" },
    { id: "CLOX", name: "Cloxacillin" },
    { id: "CFX", name: "CEFIXIME" },
    { id: "TET", name: "Tetracycline" },
    { id: "LEV", name: "Levofloxacin" },
    { id: "DOXY", name: "Doxycycline" },
    { id: "NOR", name: "Norfloxacin" },
    { id: "PEN", name: "Penicillin" },
    { id: "ERY", name: "Erythromycin" },
    { id: "LIN", name: "Linezolid" },
    { id: "VAN", name: "Vancomycin" },
    { id: "IMP", name: "Imipenem" },
    { id: "MOX", name: "Moxifloxacin" },
    { id: "CTX", name: "Cefotaxime" },
    { id: "CEFIPIME", name: "Cefepime" },
    { id: "AMK", name: "Amikacin" },
    { id: "OF", name: "Ofloxacin" },
    { id: "PIP", name: "Piperacillin" },
    { id: "PIP_TAX", name: "Piperacillin Tazobactam" },
    { id: "CEF_SUB", name: "Cefaperazone Sulbactam" },
    { id: "MEM", name: "Meropenem" },
    { id: "CHL", name: "Chloramphenicol" },
    { id: "TICAR_CALV", name: "Ticarcillin/Clavulanic " },
    { id: "ERTA", name: "Ertapenem" },
    { id: "COL", name: "Colistin" },
    { id: "TGC", name: "Tigecycline" },
    { id: "RIF", name: "Rifampin" },
    { id: "TEICO", name: "Teicoplanin" },
    { id: "TOB", name: "Tobramycin" },
    { id: "AZTERO", name: "Aztreonam" },
    { id: "NF", name: "Nitrofurantoin" },
    { id: "CEFOTAXIME", name: "Cefotaxime" },
    { id: "AZITHRO", name: "Azithromycin" },
    { id: "FLUCO", name: "Fluconazole" },
    { id: "AMPHO", name: "Amphotericin B" },
    { id: "CLINDA", name: "Clindamycin" },
    { id: "MICA", name: "Micafungin" },
    { id: "ANIDUL", name: "Anidulafungin" },
    { id: "CASPO", name: "Caspofungin" },
    { id: "OXAC", name: "Oxacillin" },
    { id: "DAPTO", name: "Daptomycin" },
  ];

  return (
    <div className="border p-2 rounded-md mb-5">
      <div className="flex flex-row">
      <div className="text-lg text-white font-semibold mt-2 my-5">Culture Report</div>
      <button className="mx-5 px-2 py-1 hover:bg-slate-600 rounded-md my-auto" onClick={()=>deleteCultureReport(id)}> 
      <BsTrashFill className=" fill-red-600 " size={24} fill="red" />
      </button>
      </div>
      <div className="flex flex-wrap mb-2">
        <div className="flex items-center mb-5">
          <label className="mr-4 block uppercase tracking-wide text-sm font-bold text-white">
            Culture Sent Before Antibiotics:{" "}
          </label>
          <input
            type="radio"
            name="sentWhen"
            value="true"
            className=""
            required
          />
          <label className="mr-6 my-auto ml-2 text-sm font-semibold text-white">
            Yes
          </label>
          <input type="radio" name="sentWhen" value="false" required />
          <label className="mx-2 text-sm font-semibold text-white">No</label>
        </div>
      </div>

      <div className="flex flex-wrap mb-5">
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <label
            className="label-upper"
            htmlFor="email"
          >
            Date and time of Culture sent
          </label>
          <input
            className="input-imp"
            name="department"
            id="department"
            type="datetime-local"
            placeholder="Department"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
          <label
            className="label-upper"
            htmlFor="email"
          >
            Date and time of Culture Reported
          </label>
          <input
            className="input-imp"
            name="department"
            id="department"
            type="datetime-local"
            placeholder="Department"
          />
        </div>
      </div>

      {/* Specimen */}
      <div className="flex flex-wrap mb-5">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <label htmlFor="specimen" className="font-semibold text-white">
            Specimen:{" "}
          </label>
          <div className="relative">
            <select
              className=" appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="branch"
              id="grid-branch"
              required
              defaultValue={"Select Specialization"}
            >
              <option value="Select Specialization" disabled>
                Select Specimen
              </option>
              <option value="Blood">Blood</option>
              <option value="Sputum">Sputum</option>
              <option value="">Urine</option>
              <option value="">CSF</option>
              <option value="">Wound</option>
              <option value="">Pus</option>
              <option value="">BAL</option>
              <option value="">Stool</option>
              <option value="">Mini Bal</option>
              <option value="">Ascetic fluid</option>
              <option value="">Pleural fluid</option>
              <option value="Orthopaedics">Tissue</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="label-upper"
            htmlFor="email"
          >
            Site of collection
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
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="label-upper"
            htmlFor="email"
          >
            Organism
          </label>
          <input
            required
            className="input-imp"
            name="department"
            id="department"
            type="text"
            placeholder="Organism"
          />
        </div>
      </div>

      <div className="flex flex-wrap mb-5">
        <div className=" md:w-1/3 mb-6 md:mb-0">
          <label htmlFor="specimen" className="font-semibold text-white">
            Antibiotic Sensitivity:
          </label>
          <div className="flex flex-wrap max-h-28 bg-gray-600 rounded-md overflow-scroll">
            {antibioticList.map((antibiotic) => (
              <div
                key={antibiotic}
                className="bg-slate-900/90 backdrop-blur-sm flex flex-row align-middle w-min rounded-md m-1 text-white"
              >
                <span className="m-1 whitespace-nowrap">{antibiotic}</span>
                <CiSquareRemove
                  className="my-auto hover:bg-slate-200/40 rounded-md fill-slate-100 hover:fill-gray-800"
                  onClick={() => removeAntibiotic(antibiotic)}
                  size={26}
                />
              </div>
            ))}
          </div>
          <div className="relative">
            <select
              className=" appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="branch"
              id="grid-branch"
              required
              defaultValue={"Select Specialization"}
              onChange={(e) => handleAntibioticChange(e)}
            >
              <option value="Select Specialization" disabled>
                Select Specimen
              </option>
              {antibioticFullList.map((antibiotic) => (
                <option key={antibiotic.id} value={antibiotic.name}>
                  {antibiotic.name}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 md:px-3 mb-6 md:mb-0">
          <label htmlFor="specimen" className="font-semibold text-white">
            Multi Drug Resistant Organism:
          </label>
          <div className="relative">
            <select
              className=" appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="branch"
              id="grid-branch"
              required
              defaultValue={"Select Specialization"}
            >
              <option value="Select Specialization" disabled>
                Select if MDR
              </option>
              <option value="Blood">MDR</option>
              <option value="Sputum">No MDR</option>
              <option value="Blood">PS (Pan Sensitive)</option>
              <option value="Blood">NA (No Organism)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 md:px-3 mb-6 md:mb-0">
          <label htmlFor="specimen" className="font-semibold text-white">
            Resistance:
          </label>
          <div className="relative">
            <select
              className=" appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="branch"
              id="grid-branch"
              required
              defaultValue={"Select Specialization"}
            >
              <option value="Select Specialization" disabled>
                Select Specimen
              </option>
              <option value="Blood">
                CRE (Carbapenem resistant enterobactereciae)
              </option>
              <option value="Sputum">
                {" "}
                VRE (Vancomycin resistant Enterococcus)
              </option>
              <option value="">Col Re (colistin Resistant)</option>
              <option value="">ESBL (Extended spectrum Beta lactamase)</option>
              <option value="">
                MRSA (Methicillin resistant Staph Aureus){" "}
              </option>
              <option value="">NA- None of the above are applicable</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mb-5">
        <div className="text-white text-base font-semibold">
          Imaging
        </div>
        <div className="w-full flex flex-wrap font-medium text-white">
          <div className="w-1/3 sm:w-1/4 md:w-1/6 p-1">
            <input type="checkbox" name="UTI" id="UTI" className="" />
            <label htmlFor="infection" className="ml-2">
              X ray
            </label>
          </div>
          <div className="w-1/3 sm:w-1/4 md:w-1/6 p-1">
            <input type="checkbox" name="UTI" id="UTI" className="" />
            <label htmlFor="infection" className="ml-2">
              CT
            </label>
          </div>
          <div className="w-1/3 sm:w-1/4 md:w-1/6 p-1">
            <input type="checkbox" name="UTI" id="UTI" className="" />
            <label htmlFor="infection" className="ml-2">
              MRI
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
