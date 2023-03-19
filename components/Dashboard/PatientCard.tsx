import React from "react";
import Link from "next/link";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useMutation, gql } from "@apollo/client";

interface propType {}

export default function PatientCard(props) {
  const {
    id,
    fullName,
    mrdNumber,
    dateOfAdmission,
    department,
    cormorbodities,
    height,
    weight,
    active,
  } = props;

  const dischargePatientGQL = gql`
    mutation ($id: ID) {
      dischargePatient(id: $id)
    }
  `;
  const [dischargePatient, { data, loading, error }] =
    useMutation(dischargePatientGQL);

  const dischargeButton = () => {
    console.log("discharge");
    if(confirm("Sure? discharge " + fullName)){
      dischargePatient({ variables: { id: id } });
    }
  };

  return (
    <div className="bg-slate-100/50 backdrop-blur-sm m-5 max-w-lg border min-w-min rounded-md p-2">
      <div className="flex flex-row items-center">
        <div className="text-xl my-1">{fullName}</div>
        {active ? (
          <GrStatusGoodSmall className="fill-green-700 mx-1" />
        ) : (
          <GrStatusGoodSmall className="fill-red-700 mx-1" />
        )}
      </div>
      <div>MRD No: {mrdNumber}</div>
      <div className="space-x-5">
        {" "}
        <span> Age: 19 </span> <span>Sex: M</span>
      </div>

      <div className="space-x-5 mt-5 mb-2 flex flex-row">
        {/* <Link href={"/form/"+id}>
          <button className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400">
            Patient Form
          </button>
        </Link>
        <Link href={"/analysis/"+id}>
          <button className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400">
            Analysis Form
          </button>
        </Link> */}
        <div
          className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400 cursor-pointer"
          onClick={dischargeButton}
        >
          Discharge
        </div>
        <div className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400">
          Download Reports
        </div>
      </div>
    </div>
  );
}
