import { useEffect, useState, useRef } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { BsTrashFill } from "react-icons/bs";
import { CultureReportType } from "../../utils/types";
import {
  antibioticFullList,
  specimenList,
  resistanceOrganismList,
} from "../../utils/objectList";

interface proptype {
  id: number;
  deleteCultureReport: (id: number) => void;
  state: CultureReportType[] | [];
  setState: (state: CultureReportType[] | []) => void;
}

export default function CultureReport(props: proptype) {
  const { id, deleteCultureReport, state, setState } = props;
  const [antibioticList, setAntibioticList] = useState<string[]>([]);

  const [imaging, setImaging] = useState({
    isXRay: false,
    isCTScan: false,
    isMRI: false,
    isUltrasound: false,
    isPETScan: false,
  });

  const [showImpression, setShowImpression] = useState(false);

  useEffect(() => {}, [showImpression]);

  const handleAntibioticChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const name = e.target.value;
    if (!antibioticList.includes(name)) {
      const newList = [...antibioticList, name];
      setAntibioticList(newList);
      const newCultureReport = state.map((report) => {
        if (report.report === id) {
          return { ...report, antibioticSensitivity: newList };
        }
        return report;
      });
      setState(newCultureReport);
    }
  };

  const removeAntibiotic = (name: string) => {
    const newAntibioticList = antibioticList.filter(
      (antibiotic) => antibiotic !== name
    );
    setAntibioticList(newAntibioticList);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const newCultureReport = state.map((report) => {
      if (report.report === id) {
        return { ...report, [name]: value };
      }
      return report;
    });
    setState(newCultureReport);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newCultureReport = state.map((report) => {
      if (report.report === id) {
        return { ...report, [name]: value };
      }
      return report;
    });

    setState(newCultureReport);
  };

  const imagingChange = (name: keyof typeof imaging) => {
    let newImaging = { ...imaging, [name]: !imaging[name] };
    setImaging(newImaging);
    const newCultureReport = state.map((report) => {
      if (report.report === id) {
        return { ...report, [name]: !imaging[name] };
      }
      return report;
    });

    setState(newCultureReport);

    if (Object.values(newImaging).includes(true)) {
      setShowImpression(true);
    } else {
      setShowImpression(false);
    }
  };

  return (
    <div className="border p-2 rounded-md mb-5">
      <div className="flex flex-row justify-between">
        <div className="text-lg text-white font-semibold mt-3 my-5">
          Culture Report
        </div>
        <div
          className="mx-3 px-2 hover:bg-slate-600 rounded-md my-auto p-2 hover:cursor-pointer border border-slate-300"
          onClick={() => deleteCultureReport(id)}
        >
          <BsTrashFill className=" fill-red-600 " size={24} fill="red" />
        </div>
      </div>
      <div className="flex flex-wrap mb-2">
        <div className="flex items-center mb-5">
          <label className="mr-4 block uppercase tracking-wide text-sm font-bold text-white">
            Culture Sent Before Antibiotics:{" "}
          </label>
          <input
            type="radio"
            name="sentBeforeAntibiotics"
            value="true"
            onChange={handleChange}
            className=""
            required
          />
          <label className="mr-6 my-auto ml-2 text-sm font-semibold text-white">
            Yes
          </label>
          <input
            type="radio"
            name="sentBeforeAntibiotics"
            onChange={handleChange}
            value="false"
            required
          />
          <label className="mx-2 text-sm font-semibold text-white">No</label>
        </div>
      </div>

      <div className="flex flex-wrap mb-5">
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Date and time of Culture sent
          </label>
          <input
            className="input-imp"
            onChange={handleChange}
            name="dateTimeSent"
            id="dateTimeSent"
            type="datetime-local"
            placeholder=""
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Date and time of Culture Reported
          </label>
          <input
            className="input-imp"
            onChange={handleChange}
            name="dateTimeReported"
            id="dateTimeReported"
            type="datetime-local"
            placeholder=""
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
              name="specimen"
              id="specimen"
              required
              onChange={handleSelectChange}
              defaultValue={"Select Specialization"}
            >
              <option value="Select Specialization" disabled>
                Select Specimen
              </option>
              {specimenList.map((specimen) => (
                <option key={specimen.id} value={specimen.value}>
                  {specimen.name}
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
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Site of collection
          </label>
          <input
            required
            className="input-imp"
            name="siteOfCollection"
            onChange={handleChange}
            id="siteOfCollection"
            type="text"
            placeholder="Department"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label-upper" htmlFor="email">
            Organism
          </label>
          <input
            required
            className="input-imp"
            name="organism"
            id="organism"
            onChange={handleChange}
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
              name="multiDrugResistance"
              id="multiDrugResistance"
              onChange={handleSelectChange}
              required
              defaultValue={"Select Specialization"}
            >
              <option value="Select Specialization" disabled>
                Select if MDR
              </option>
              <option value="MDR">MDR</option>
              <option value="NoMDR">No MDR</option>
              <option value="PanSensitive">PS (Pan Sensitive)</option>
              <option value="NA(No Organism)">NA (No Organism)</option>
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
              name="resistance"
              id="resistance"
              onChange={handleSelectChange}
              required
              defaultValue={"Select Specialization"}
            >
              <option value="Select Specialization" disabled>
                Select Resistance
              </option>
              {resistanceOrganismList.map((resistanceOrganism) => (
                <option
                  key={resistanceOrganism.id}
                  value={resistanceOrganism.name}
                >
                  {resistanceOrganism.name}
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
      </div>

      <div className="flex flex-wrap mb-5">
        <div className="text-white text-base font-semibold">Imaging</div>
        <div className="w-full flex flex-wrap font-medium text-white">
          <div className="w-1/3 sm:w-1/4 md:w-1/6 p-1">
            <input
              type="checkbox"
              name="isXRay"
              id="isXRay"
              className=""
              onChange={() => {
                imagingChange("isXRay");
              }}
            />
            <label htmlFor="infection" className="ml-2">
              X ray
            </label>
          </div>
          <div className="w-1/3 sm:w-1/4 md:w-1/6 p-1">
            <input
              type="checkbox"
              name="isUltrasound"
              id="isUltrasound"
              className=""
              onChange={() => {
                imagingChange("isUltrasound");
              }}
            />
            <label htmlFor="infection" className="ml-2">
              Ultra Sound
            </label>
          </div>
          <div className="w-1/3 sm:w-1/4 md:w-1/6 p-1">
            <input
              type="checkbox"
              name="isCTScan"
              id="isCTScan"
              className=""
              onChange={() => {
                imagingChange("isCTScan");
              }}
            />
            <label htmlFor="infection" className="ml-2">
              CT
            </label>
          </div>
          <div className="w-1/3 sm:w-1/4 md:w-1/6 p-1">
            <input
              type="checkbox"
              name="isMRI"
              id="isMRI"
              className=""
              onChange={() => {
                imagingChange("isMRI");
              }}
            />
            <label htmlFor="infection" className="ml-2">
              MRI
            </label>
          </div>
          <div className="w-1/3 sm:w-1/4 md:w-1/6 p-1">
            <input
              type="checkbox"
              name="isPETScan"
              id="isPETScan"
              className=""
              onChange={() => {
                imagingChange("isPETScan");
              }}
            />
            <label htmlFor="infection" className="ml-2">
              PET MRI
            </label>
          </div>
        </div>
        <div className="md:w-1/3 my-2 mx-2">
          <textarea
            className={`px-2 py-1 rounded-md w-full impression ${
              showImpression ? "" : "hidden"
            }`}
            name="impression"
            id="impression"
            onChange={handleChange}
            placeholder="Impression..."
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
