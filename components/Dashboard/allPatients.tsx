import React, { useMemo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery, gql } from "@apollo/client";
import TablePlaceholder from "./tablePlaceholder";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";

export default function AllPatientTable() {
  
  const getActivePatient = gql`
    query {
      patients {
        id
        fullName
        admittingDoctor
        mrdNumber
        dateOfBirth
        dateOfAdmission
        department
        patientLocation
        cormorbodities
        height
        weight
        active
      }
    }
  `;
  const { loading, error, data } = useQuery(getActivePatient, {
    pollInterval: 10000,
  });

  const columns = useMemo(
    () => [
      {
        Header: "Patient Name",
        accessor: "fullName",
      },
      {
        Header: "MRD Number",
        accessor: "mrdNumber",
      },
      {
        Header: "Age",
        // accessor: "age",
        Cell: ({ row }) => (
          <span>{calculate_age(row.original.dateOfBirth) + " Years"}</span>
        ),
      },
      {
        Header: "Location",
        accessor: "patientLocation",
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination
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
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  const calculate_age = (dob) => {
    var today = new Date();
    var birthDate = new Date(dob); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };

  if(loading){
    return <TablePlaceholder/>
  }
  

  return (
    <div className="">
      <div className="table max-w-5xl md:max-w-7xl mx-auto border-2 rounded-xl py-2 my-3 bg-gray-50">
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
                      {...cell.getCellProps()}
                      key={i + j}
                      className="py-3 px-3 text-center max-w-[320px] overflow-hidden truncate"
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
