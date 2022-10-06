import { useContext } from 'react'
import { FormContext } from '../../FormContext'

const Input = ({field_label, field_placeholder, field_value, field_id}) =>{
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
            <input type="text" placeholder={field_placeholder ? field_placeholder : "" } value={field_value} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>handleChange(field_id, event)}></input>
            <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
    )
}

export default Input