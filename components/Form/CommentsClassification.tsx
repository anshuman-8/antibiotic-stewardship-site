import React from 'react'

export default function CommentsClassification() {
  return (
    <div className='form-component'>
      <div className="flex flex-wrap mb-5 mx-1">
            <div className="w-full md:w-1/3 px-1 mb-6 md:mb-5">
              <label className="label-upper" htmlFor="">
                Classification of patient:
              </label>
              <input
                required
                className="input-imp"
                name="department"
                id="department"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/3 px-1 mb-6 md:mb-5">
              <label className="label-upper" htmlFor="">
                Classification of disease/ diagnosis:
              </label>
              <input
                required
                className="input-imp"
                name="department"
                id="department"
                placeholder=""
              />
            </div>

            <div className="w-full md:w-1/3 pr-1 mb-6 md:mb-5">
              <label className="label-upper" htmlFor="">
                Comments
              </label>
              <textarea
                required
                className="input-imp"
                name="department"
                id="department"
                placeholder="Comments"
              />
            </div>
          </div>
    </div>
  )
}
