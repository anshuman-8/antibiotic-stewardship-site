import React, { useEffect, useState } from "react";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import { AntibioticsUsedType } from "../../utils/types";

interface AntibioticsUsedProps {
  rows: AntibioticsUsedType[] | [];
  setRows: React.Dispatch<React.SetStateAction<AntibioticsUsedType[]|[]>>;
}

export default function AntibioticsUsed(props:AntibioticsUsedProps){

  const {rows, setRows} = props;

  // useEffect(() => {
  //   console.log("rows", rows);
  // }, [rows]);

  const [count, setCount] = useState(1);

  const addRow = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setRows([
      ...rows,
      {
        id: "",
        initDate: "",
        antibiotic: "",
        loadingDose: "",
        maintenanceDose: "",
        route: "",
        frequency: "",
        daysDuration: "",
        endDate: "",
      },
    ]);
    setCount(count + 1);
  };

  function deleteRow(index: number) {
    if (count > 1) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
      setCount(count - 1);
    }
  }


  return (
    <div className="form-component" id="antibiotic-used">
      <div className="text-xl text-white font-semibold mt-2 mb-2 my-1 flex flex-row">
        <div>Antibiotic Used </div>
        <div
          className="border-2 border-amber-400 p-1 mx-1 rounded-md hover:cursor-pointer"
          onClick={addRow}
        >
          <GrAddCircle className="text-red-700 fill-red-400" fill="#ffffff" />
        </div>
      </div>
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-white">
              <th></th>
              <th className="py-2">Initial Date</th>
              <th className="py-2">Antibiotic</th>
              <th className="py-2">Loading Dose</th>
              <th className="py-2">Maintenance Dose</th>
              <th className="py-2">Route</th>
              <th className="py-2">Frequency</th>
              <th className="py-2">Days (Duration)</th>
              <th className="py-2">End Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="">
                <td>
                  <div
                    className="border-2 border-amber-400 py-2 px-4 mb-3 rounded-md hover:cursor-pointer"
                    onClick={() => deleteRow(index)}
                  >
                    <GrSubtractCircle className="fill-orange-700 text-red-300" />
                  </div>
                </td>
                <td className="">
                  <input
                    type="date"
                    className="appearance-none bg-gray-100 text-gray-700 border rounded w-[10rem] py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                    value={row.initDate}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].initDate = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="appearance-none bg-gray-100 text-gray-700 border rounded w-[20rem] py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                    value={row.antibiotic}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].antibiotic = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    className="appearance-none bg-gray-100 text-gray-700 border rounded w-[5rem] py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                    value={row.loadingDose}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].loadingDose = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    className="appearance-none bg-gray-100 text-gray-700 border rounded w-[7rem] py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                    value={row.maintenanceDose}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].maintenanceDose = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="appearance-none bg-gray-100 text-gray-700 border rounded w-[7rem] py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                    value={row.route}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].route = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    className="appearance-none bg-gray-100 text-gray-700 border rounded w-[7rem] py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                    value={row.frequency}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].frequency = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    className="appearance-none bg-gray-100 text-gray-700 border rounded w-[7rem] py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                    value={row.daysDuration}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].daysDuration = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    className="appearance-none bg-gray-100 text-gray-700 border rounded w-[10rem] py-2 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                    value={row.endDate}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].endDate = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

