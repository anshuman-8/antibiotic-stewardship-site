import React from 'react'

export default function AntibioticUsed() {
  return (
    <div>
      <div className="text-lg text-white font-semibold mt-2 my-1 flex flex-row">
            <div>
            Antibiotic Used{" "}
            </div>
            <div>
                <button className="bg-gray-300 px-3 py-2 rounded-md shadow-md active:shadow-sm hover:bg-gray-400">
                    Add
                </button>
            </div>
          </div>
          {
            <div className="flex flex-wrap mb-5 mx-1">
            <div className="w-full md:w-[33%] mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                Antibiotic:
              </label>
              <input
                required
                className="input-imp"
                name=""
                id=""
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full  md:w-[11.111%] px-2 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                Dose:
              </label>
              <input
                required
                className="input-imp"
                name=""
                id=""
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full  md:w-[11.111%] px-2 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                 Route:
              </label>
              <input
                required
                className="input-imp"
                name=""
                id=""
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full  md:w-[11.111%] px-2 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                Frequency:
              </label>
              <input
                required
                className="input-imp"
                name=""
                id=""
                type="text"
                placeholder=""
              />
            </div>



            <div className="w-full  md:w-[11.111%] px-2 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                init. Date:
              </label>
              <input
                required
                className="input-imp"
                name=""
                id=""
                type="text"
                placeholder=""
              />
            </div>


            <div className="w-full  md:w-[11.111%] px-2 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                Loading Dose:
              </label>
              <input
                required
                className="input-imp"
                name=""
                id=""
                type="text"
                placeholder=""
              />
            </div>



            <div className="w-full md:w-[11.111%] md:pl-3 md:pr-1 mb-6 md:mb-0">
              <label
                className="label-upper"
                htmlFor="email"
              >
                Infusion:
              </label>
              <input
                required
                className="input-imp"
                name=""
                id=""
                type="text"
                placeholder=""
              />
            </div>
          </div>}
    </div>
  )
}
