import React from 'react'

export default function AntibioticSensitiveness() {
  return (
    <div>
        <div className="text-white my-3">Antibiotic Sensitiveness</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
            <div className="">
                <input type="checkbox" name="UTI" id="UTI" className=""/>
                <label htmlFor="infection">AMX_CLAV</label>
            </div>
            <div className="">
                <input type="checkbox" name="CNS" id="CNS" className=""/>
                <label htmlFor="infection">AMP</label>
            </div>
            <div className="">
                <input type="checkbox" name="skinAndSoftTissue" id="skinAndSoftTissue" className=""/>
                <label htmlFor="infection">GEN</label>
            </div>
            <div className="">
                <input type="checkbox" name="abdominal" id="abdominal" className=""/>
                <label htmlFor="infection">COTRI</label>
            </div>
            <div className="">
                <input type="checkbox" name="bacteremia" id="bacteremia" className=""/>
                <label htmlFor="infection">CIP</label>
            </div>
            <div className="">
                <input type="checkbox" name="UTI" id="UTI" className=""/>
                <label htmlFor="infection">CLOX</label>
            </div>
            <div className="">
                <input type="checkbox" name="CNS" id="CNS" className=""/>
                <label htmlFor="infection">CFX</label>
            </div>
            <div className="">
                <input type="checkbox" name="skinAndSoftTissue" id="skinAndSoftTissue" className=""/>
                <label htmlFor="infection">TET</label>
            </div>
            <div className="">
                <input type="checkbox" name="abdominal" id="abdominal" className=""/>
                <label htmlFor="infection">LEV</label>
            </div>
            <div className="">
                <input type="checkbox" name="bacteremia" id="bacteremia" className=""/>
                <label htmlFor="infection">DOXY</label>
            </div>
            <div className="">
                <input type="checkbox" name="UTI" id="UTI" className=""/>
                <label htmlFor="infection">NOR</label>
            </div>
            <div className="">
                <input type="checkbox" name="CNS" id="CNS" className=""/>
                <label htmlFor="infection">PEN</label>
            </div>
            <div className="">
                <input type="checkbox" name="skinAndSoftTissue" id="skinAndSoftTissue" className=""/>
                <label htmlFor="infection">ERY</label>
            </div>
            <div className="">
                <input type="checkbox" name="abdominal" id="abdominal" className=""/>
                <label htmlFor="infection">LIN</label>
            </div>
            <div className="">
                <input type="checkbox" name="bacteremia" id="bacteremia" className=""/>
                <label htmlFor="infection">VAN</label>
            </div>
        </div>
    </div>
  )
}
