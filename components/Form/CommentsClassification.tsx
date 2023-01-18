import React from 'react'

interface PropType {
    submitButton: () => JSX.Element
}
export default function CommentsClassification(props:PropType) {
  return (
    <>
    <div className='form-component'>
      <div className="flex flex-wrap mb-2 mx-1">
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
    {props.submitButton()}
    </div>
    </>
  )
}
