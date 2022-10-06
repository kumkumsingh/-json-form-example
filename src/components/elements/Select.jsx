import { useContext } from 'react'
import { FormContext } from '../../FormContext'

const Select = ({ field_label, field_placeholder, field_value, field_id, field_options }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <>
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
            <select className="form-select" aria-label="Default select example" onChange={(event) => handleChange(field_id, event)}>
                <option>{field_label}</option>
                {field_options.length > 0 && field_options.map((option, i) => <option value={option.option_label} key={i}>{option.option_label}</option>)}
            </select>
        </>
    )
}

export default Select