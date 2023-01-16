import React, {} from 'react'
import { GrAddCircle } from 'react-icons/gr'

export default function AntibioticUsed() {

    const [antibiotic, setAntibiotic] = React.useState([{}])
    const [antibioticCount, setAntibioticCount] = React.useState(1)

    const addAntibiotic = () => {
        setAntibioticCount(antibioticCount + 1)
        setAntibiotic([...antibiotic, antibioticCount])
    }

  return (
    <div>
      <div className="text-lg text-white font-semibold mt-2 my-1 flex flex-row">
            <div>
            Antibiotic Used{" "}
            </div>
            <div className='border-2 border-amber-400 p-1 mx-1 rounded-md hover:cursor-pointer' onClick={addAntibiotic}>
                <GrAddCircle className='fill-amber-500' />
            </div>
          </div>
          {antibiotic.map((d,i)=>(
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

            <div className="w-full  md:w-[11.12%] px-2 mb-6 md:mb-0">
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

            <div className="w-full  md:w-[11.12%] px-2 mb-6 md:mb-0">
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

            <div className="w-full  md:w-[11.12%] px-2 mb-6 md:mb-0">
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

            <div className="w-full  md:w-[11.12%] px-2 mb-6 md:mb-0">
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

            <div className="w-full  md:w-[11.12%] px-2 mb-6 md:mb-0">
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

            <div className="w-full md:w-[11.12%] md:pl-3 md:pr-1 mb-6 md:mb-0">
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
          </div>))}
    </div>
  )
}
