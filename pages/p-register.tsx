import { ImSpinner2 } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { MdOutlineEditOff, MdOutlineModeEditOutline } from "react-icons/md";

function PRegister() {
  let date_ob = new Date();
  var year = date_ob.getFullYear();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [editDetail, setEditDetail] = useState(false);

  return (
    <div className="bg-secondary h-screen w-full relative p-2">
      <div className="w-11/12 mx-auto max-w-6xl my-6 pt-7 pb-10 bg-slate-700/80 flex flex-col z-10 shadow-xl rounded-lg p-5 backdrop-blur-md">
        <form className="w-full">
          <div
            className="my-5 mx-2 text-white font-semibold uppercase text-xl"
            onClick={() => setEditDetail(!editDetail)}
          >
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
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
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
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
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
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
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
                  name="branch"
                  id="grid-branch"
                  required
                  defaultValue={"Select Specialization"}
                >
                  <option value="Select Specialization" disabled>
                    Select Location
                  </option>
                  <option value="General Medicine">ICU</option>
                  <option value="General Surgery">Ward</option>
                  <option value="Orthopaedics">NaN</option>
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
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="grid-sem"
              >
                Stay Length <span>(Days)</span>
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                name="stayLength"
                id="stayLength"
                type="number"
                placeholder="Stay Length"
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
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                placeholder="Dr. "
              />
            </div>
          </div>

          {/* Department & Diagnostic */}
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-sm font-bold mb-2 text-white"
                htmlFor="email"
              >
                Department
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                name="department"
                id="department"
                type="text"
                placeholder="Department"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                htmlFor="phone-number"
              >
                Diagnostic
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                name="diagnostic"
                id="diagnostic"
                type="text"
                placeholder="Diagnostic"
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
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
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
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                name="diagnostic"
                id="diagnostic"
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
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                name="diagnostic"
                id="diagnostic"
                step="0.01"
                type="number"
                placeholder="Weight"
              />
            </div>
          </div>

          {/* Address & Phone no */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-sm font-bold mb-2 text-white"
                htmlFor="email"
              >
                Address
              </label>
              <textarea
                required
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none invalid:border-red-500 focus:bg-white"
                name="email"
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
                required
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
