import Link from "next/link";
import React, { useMemo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { toStringDate,calculate_age } from "../../utils/functions";

export default function AnalysisTable({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: "Patient Name",
        accessor: "patient.fullName",
      },
      {
        Header: "MRD Number",
        accessor: "patient.mrdNumber",
      },
      {
        Header: "Age",
        Cell: ({ row }) => (
          <span>
            {calculate_age(row.original.patient.dateOfBirth) + " Years"}
          </span>
        ),
      },
      {
        Header: "Review id#",
        Cell: ({ row }) => <span>{row.original.id}</span>,
      },
      {
        Header: "Reviewing Department",
        accessor: "reviewDepartment",
      },
      {
        Header: "Review Date",
        Cell: ({ row }) => <span>{toStringDate(row.original.reviewDate)}</span>,
      },
      {
        Header: " ",
        Cell: ({ row }) => (
          <div>
            <Link href={"/analysis/" + row.original.id}>
              <button className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400">
                Analysis
              </button>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
    setPageSize,
    pageOptions,
    gotoPage,
    pageCount,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="">
      {data.length !== 0 ? (
        <div className="table max-w-5xl md:max-w-7xl mx-auto border-2 rounded-xl py-2 my-3 bg-gray-50 md:mx-20">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <table {...getTableProps()} className="table-fixed">
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, j) => (
                    <th
                      {...column.getHeaderProps()}
                      key={i + j}
                      className="text-lg text-center font-medium text-gray-900 px-2 py-4 min-w-[200px]"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              className="divide-y-2 bg-white truncate"
              {...getTableBodyProps()}
            >
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    key={i}
                    className="hover:bg-slate-100/60 rounded-lg"
                  >
                    {row.cells.map((cell, j) => (
                      <td
                      key={i + j}
                      className="py-3 px-3 text-center max-w-[320px] overflow-hidden truncate"
                      {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="my-5 mx-5 flex flex-row justify-end">
            <div className="my-auto">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </div>
            <div className="my-auto">
              <select
                className="ml-2 inline-flex items-center justify-center whitespace-nowrap px-2 py-1"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[5, 10, 20, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => gotoPage(0)}
              className="px-2 py-1 bg-slate-500/40 m-2 rounded-lg shadow-lg hover:bg-slate-500/75 cursor-pointer"
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
            <button
              className="px-2 py-1 bg-slate-500/40 m-2 rounded-lg shadow-lg hover:bg-slate-500/75 cursor-pointer"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <button
              className="px-2 py-1 bg-slate-500/40 m-2 rounded-lg shadow-lg hover:bg-slate-500/75 cursor-pointer"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              className="px-2 py-1 bg-slate-500/40 m-2 rounded-lg shadow-lg hover:bg-slate-500/75 cursor-pointer"
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 m-5 mx-20 p-5">No Report For Analysis !</div>
      )}
    </div>
  );
}

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="relative focus-within:text-gray-600 block w-min ml-5">
      <AiOutlineSearch
        className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 mr-2 fill-slate-400"
        size={22}
      />
      <input
        value={filter || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        className="border-2 border-primaryDark rounded-xl px-3 py-2 focus:outline-none focus:shadow-xl pl-10"
        placeholder="  Search"
      />
    </div>
  );
};
