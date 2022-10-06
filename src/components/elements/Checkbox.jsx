import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'

const Checkbox = ({field_label, field_value, field_id}) =>{
    const { handleChange } = useContext(FormContext)
    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{field_label}</label>
                <input type="checkbox" id="exampleInputPassword1" checked={field_value} onChange={(event) =>handleChange(field_id, event)}></input>
            </div>
        </>
    )
}

export default Checkbox