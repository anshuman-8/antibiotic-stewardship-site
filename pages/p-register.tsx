import { ImSpinner2 } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useMutation, gql } from "@apollo/client";

const registerPatientGQL = gql`
  mutation ($input: PatientCreateInput!) {
    RegisterPatient(inputs: $input) {
      success
      returning {
        id
        fullName
        admittingDoctor
        dateOfBirth
        height
      }
    }
  }
`;

function PRegister() {
  let date_ob: Date = new Date();
  var year: number = date_ob.getFullYear();

  const [patientLocation, setPatientLocation] = useState("Select Specialization");


  const [registerPatient, { data, loading, error }] = useMutation(registerPatientGQL);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    if (
      !data.name ||
      !data.MRDNumber ||
      !data.dateOfBirth ||
      !data.dateOfAdmission ||
      !patientLocation
    ) {
      notify("Please fill necessary fields");
      return;
    }
    if(patientLocation === "Select Specialization"){
      notify("Please select patient location");
      return;
    }
    registerPatient({
      variables: {
        input: {
          fullName: data.name,
          mrdNumber: data.MRDNumber,
          dateOfBirth: data.dateOfBirth.toString(),
          dateOfAdmission: data.dateOfAdmission.toString(),
          patientLocation: patientLocation,
          department: data.department,
          admittingDoctor: data.doctor,
          diagnostic: data.diagnostic,
          cormorbodities: data.cormorbodities,
          height: parseInt(data.height.toString()),
          weight: parseInt(data.weight.toString()),
        },
      },
      onCompleted: (data) => {
        console.log(data);
        successNotify("Patient Registered Successfully");
      },
      onError: (error) => {
        console.log(error);
        notify("Patient Registration Failed");
      },
    });
  };

  const notify = (message: String) => toast.error(message);
  const successNotify = (message: String) => toast.success(message);

  return (
    <div className="bg-secondary h-screen w-full relative p-2">
      <div className="fixed z-50 top-10">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="w-11/12 mx-auto max-w-7xl my-6 pt-7 pb-10 bg-slate-700/80 flex flex-col z-10 shadow-xl rounded-lg p-5 backdrop-blur-md">
        <Link href={"/"} className="w-min">
          <button className="bg-gray-500/80 backdrop-blur-md text-white px-3 py-2 rounded-md">
            {" "}
            Back
          </button>
        </Link>
        <form className="w-full" onSubmit={(e)=>handleSubmit(e)}>
          <div className="my-5 mx-2 text-white font-semibold uppercase text-xl">
            Patient Details
          </div>

          {/* Full name, MRD Number */}
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* Full name */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide font-bold  text-sm mb-2 text-white"
                htmlFor="name"
              >
                Full name
              </label>
              <input
                required
                className="input-imp"
                name="name"
                id="name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            {/* MRD Number */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide font-bold mb-2  text-sm text-white"
                htmlFor="name"
              >
                MRD Number
              </label>
              <input
                required
                className="input-imp"
                name="MRDNumber"
                id="MRDNumber"
                type="text"
                placeholder="MRD Number"
              />
            </div>
          </div>

          {/* DOA, Location, Stay, Doctor */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm  font-bold mb-2"
                htmlFor="grid-course"
              >
                Date of Admission
              </label>
              <input
                required
                className="input-imp"
                name="dateOfAdmission"
                id="dateOfAdmission"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="grid-branch"
              >
                Patient Location
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="patientLocation"
                  id="patientLocation"
                  required
                  // defaultValue={"Select Specialization"}
                  value={patientLocation}
                  onChange={(e)=>setPatientLocation(e.target.value)}
                >
                  <option value="Select Specialization" disabled>
                    Select Location
                  </option>
                  <option value="ICU">ICU</option>
                  <option value="Ward">Ward</option>
                  <option value="Null">NaN</option>
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
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              <label className="label-upper" htmlFor="email">
                Department
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
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="grid-joining-year"
              >
                Admitting Doctor
              </label>
              <input
                type="text"
                name="doctor"
                id="doctor"
                className="input-imp"
                placeholder="Dr. "
              />
            </div>
          </div>

          {/* Department & Diagnostic */}
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="phone-number"
              >
                Diagnostic
              </label>
              <input
                required
                className="input-imp"
                name="diagnostic"
                id="diagnostic"
                type="text"
                placeholder="Diagnostic"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="label-upper" htmlFor="email">
                Cormorbodities
              </label>
              <textarea
                required
                className="input-imp"
                name="cormorbodities"
                id="cormorbodities"
                placeholder="Department"
              />
            </div>
          </div>

          {/* DOB, Height, weight */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="grid-course"
              >
                Date of Birth
              </label>
              <input
                required
                className="input-imp"
                name="dateOfBirth"
                id="dateOfBirth"
                type="date"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="grid-branch"
              >
                Height <span></span>
              </label>
              <input
                className="input-imp"
                name="height"
                id="height"
                type="number"
                step="0.01"
                placeholder="Height"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="grid-sem"
              >
                Weight <span>(Kg.)</span>
              </label>
              <input
                className="input-imp"
                name="weight"
                id="weight"
                step="0.01"
                type="number"
                placeholder="Weight"
              />
            </div>
          </div>

          {/* Address & Phone no */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="label-upper" htmlFor="email">
                Address
              </label>
              <textarea
                className="input-imp"
                name="address"
                id="address"
                cols={2}
                placeholder="Residential Address"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="phone-number"
              >
                Phone No.
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="phone"
                id="phone-number"
                type="text"
                placeholder="Phone number"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            {!loading ? (
              <button
                type="submit"
                className="px-5 py-3 bg-primary text-white rounded-md text-lg font-medium my-5"
                // onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            ) : (
              <div className="bg-slate-400/50 px-6 mt-3 ">
                <ImSpinner2
                  className="animate-spin my-3 fill-primary "
                  size={30}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PRegister;
