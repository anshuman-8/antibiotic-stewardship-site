import React from "react";
import { gql, useQuery } from "@apollo/client";

// interface FormIntroProps {
//   state: FormIntroType;
//   setState: React.Dispatch<React.SetStateAction<FormIntroType>>;
//   patientId: string;
// }
export default function FormIntro(props) {
  const { state, setState, patientId } = props;

  const GET_PATIENT = gql`
    query ($id: ID!) {
      patient(id: $id) {
        id
        fullName
        mrdNumber
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PATIENT, {
    variables: {
      id: patientId,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  if (loading)
    return (
      <div className="form-component">
        {/* to display patient data */}
        <div className="text-white font-semibold text-lg space-y-2 my-5">
          <div>
            {" "}
            <span className="text-2xl px-1">.......</span>
          </div>
          <div>MRD No: </div>
          <div>Age : </div>
        </div>

        <div className="flex flex-row space-x-10 items-center">
          <div className="mb-6 md:mb-5">
            <label className="label-upper">Review Date: </label>
            <div className="appearance-none max-w-xs block w-full h-10 bg-gray-100 text-gray-700 border rounded py-2  px-3 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white" />
          </div>

          <div className=" md:w-1/3 mb-6 md:mb-5">
            <label className="label-upper" htmlFor="">
              Reviewing Department
            </label>
            <div className="input-imp h-10"></div>
          </div>
        </div>
      </div>
    );

  if (error) return <p>Error :(</p>;

  return (
    <div className="form-component">
      {/* to display patient data */}
      <div className="text-white font-semibold text-lg space-y-2 my-5">
        <div>
          {" "}
          <span className="text-2xl px-1">{data.patient.fullName}</span>
        </div>
        <div>MRD No: {data.patient.mrdNumber}</div>
        <div>Age : {"19"}</div>
      </div>

      <div className="flex flex-row space-x-10 items-center">
        <div className="mb-6 md:mb-5">
          <label className="label-upper">Review Date: </label>
          <input
            required
            onChange={handleInputChange}
            name="reviewDate"
            defaultValue={state?.reviewDate}
            id="reviewDate"
            className="appearance-none max-w-xs block w-full bg-gray-100 text-gray-700 border rounded py-2  px-3 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
            type="date"
          />
        </div>

        <div className=" md:w-1/3 mb-6 md:mb-5">
          <label className="label-upper" htmlFor="">
            Reviewing Department
          </label>
          <input
            required
            onChange={handleInputChange}
            value={state.reviewingDepartment}
            className="input-imp"
            name="reviewingDepartment"
            id="reviewingDepartment"
            type="text"
            placeholder="Department"
          />
        </div>
      </div>
    </div>
  );
}
