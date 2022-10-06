import React from 'react'
import Input from './elements/Input'
import Checkbox from './elements/Checkbox'
import Select from './elements/Select'

const Element = ({field: {field_type, field_label, field_placeholder, field_value, field_id, field_options}}) => {
  switch(field_type){
    case 'text':
      return (<Input field_id={field_id} field_value={field_value} field_placeholder={field_placeholder} field_label={field_label}/>)
      case 'checkbox':
        return(<Checkbox field_id={field_id} field_value={field_value} field_label={field_label} />)
        case 'select':
          return(<Select field_id={field_id} field_value={field_value} field_placeholder={field_placeholder} field_label={field_label} field_options={field_options}/>)
      default:
     return null
  }
}

export default Element