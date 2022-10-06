import './App.css';
import formJson from './formElement.json'
import { useEffect, useState } from 'react'
import Element from './components/Element'
import { FormContext } from './FormContext';

function App() {
  const [elements, setElements] = useState(null)
  useEffect(() => {
    setElements(formJson[0])
  }, [])

  const { fields, page_label } = elements ?? {}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('elements', elements)
  }
  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked
            break;
          default:
            field['field_value'] = event.target.value
            break;
        }
        const newElements = { ...elements }
        setElements(newElements)
      }
    })
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h3>{page_label}</h3>
        {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
        <form onSubmit={(event)=>handleSubmit(event)}>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
