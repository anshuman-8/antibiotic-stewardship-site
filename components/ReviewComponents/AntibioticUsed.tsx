import React from "react";

export default function AntibioticUsed() {
  return (
    <div className="flex flex-col">
      <div className="text-lg text-white font-semibold">Antibiotic Used</div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 py-2 inline-block min-w-full sm:px-2 lg:px-8">
        <div className="overflow-auto">
          <table className="min-w-full border-2 border-white rounded-lg">
            <thead className="bg-slate-500 text-white">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium px-2 py-4 text-left"
                >
                  Initial Date
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium px-2 py-4 text-left"
                >
                  Antibiotic
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium px-2 py-4 text-left"
                >
                  Loading Dose
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium px-2 py-4 text-left"
                >
                  Maintenance Dose
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium px-2 py-4 text-left"
                >
                  Route
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium px-2 py-4 text-left"
                >
                  Frequency
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium px-2 py-4 text-left"
                >
                  Days(Duration)
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium px-2 py-4 text-left"
                >
                  End Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  23/23/2334
                </td>
                <td className="text-sm text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                  The Antibiotic used
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  23 lm
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  23 lm
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  IV
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  24
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  100
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  234/23/242
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  23/23/2334
                </td>
                <td className="text-sm text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                  The Antibiotic used
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  23 lm
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  23 lm
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  IV
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  24
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  100
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  234/23/242
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  23/23/2334
                </td>
                <td className="text-sm text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                  The Antibiotic used
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  23 lm
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  23 lm
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  IV
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  24
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  100
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  234/23/242
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  23/23/2334
                </td>
                <td className="text-sm text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
                  The Antibiotic used
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  23 lm
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  23 lm
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  IV
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  24
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  100
                </td>
                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                  234/23/242
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
