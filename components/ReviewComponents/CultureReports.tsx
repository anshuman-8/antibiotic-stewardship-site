import { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";

// interface proptype {
//   id: number;
// }

export default function CultureReports(props) {
  const { report } = props;
  const [antibioticList, setAntibioticList] = useState<string[]>([]);

  const dateToddmmyyyy = (date: Date) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const dateTohhmmAP = (date: Date) => {
    const d = new Date(date);
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const hours12 = hours % 12;
    const hours12Str = hours12 ? hours12.toString() : "12";
    const minutesStr =
      minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    return `${hours12Str}:${minutesStr} ${ampm}`;
  };

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
              {report.sentBeforeAntibiotic ? "Yes" : "No"}
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Site of collection:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm text-white">
              {report.siteOfCollection}
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Organism:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm text-white">
              {report.organism}
            </p>
          </div>

          {/* 4 */}

          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Specimen:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm  text-white">
              {report.specimenType}
            </p>
          </div>

          {/* 5 */}

          <div className="flex flex-row justify-between items-center">
            <p className="mr-2 uppercase text-sm font-bold text-white">
              Multi Drug Resistant Organism:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm  text-white">
              {report.multiDrugResistant}
            </p>
          </div>

          {/* 6 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Resistance:{" "}
            </p>
            <p className="mr-2 block tracking-wide text-sm  text-white">
              {report.resistance}
            </p>
          </div>
        </div>
        {/* right column */}
        <div className="p-4 w-[30rem]">
          {/* 8 */}
          <div className="flex flex-row justify-between my-1">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Culture Sent :
            </p>
            <div className="flex flex-col text-white">
              <p>{dateToddmmyyyy(report.timeSent)}</p>
              <p>{dateTohhmmAP(report.timeSent)}</p>
            </div>
          </div>
          {/* 9 */}
          <div className="flex flex-row justify-between">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Culture Reported :
            </p>
            <div className="flex flex-col text-white">
              <p>{dateToddmmyyyy(report.timeReported)}</p>
              <p>{dateTohhmmAP(report.timeReported)}</p>
            </div>
          </div>
          {/* 10 */}
          <div className="mb-6 md:mb-0 flex flex-row justify-between">
            <label htmlFor="specimen" className="font-semibold text-white">
              Antibiotic Sensitivity:
            </label>
            <div className="flex justify-between flex-wrap">
              {report.antibioticSensitivity.map((antibiotic,i) => {
                return (
                  <div
                    key={antibiotic+i}
                    className="bg-slate-800/90 backdrop-blur-sm h-fit align-middle w-min rounded-md m-1 p-0.5 text-white"
                  >
                    {antibiotic.antibiotic}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row justify-between my-1">
            <p className="mr-2 block uppercase tracking-wide text-sm font-bold text-white">
              Imaging:{" "}
            </p>
            <div className="mr-2 block tracking-wide text-sm  text-white">
              <label htmlFor="infection" className="font-medium block">
                {Object.keys(report.Imaging).map((key, i) => {
                  if (report.Imaging[key] === true) {
                    return <span className="p-1 bg-slate-700 rounded-md mx-1" key={i}>{key}</span>;
                  }
                })}
              </label>
              <div className="max-h-20 rounded-md overflow-scroll bg-slate-700/30 p-1 min-w-[200px]">
                {report.Imaging.impression}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
