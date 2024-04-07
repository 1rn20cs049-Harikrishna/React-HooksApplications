import './index.css'
import {useState} from 'react'

const ConditionalRendering = () => {
  const [isEditable, setIsEditable] = useState(false)
  const [fieldValue, setFieldValue] = useState('')
  return (
    <div className="conditional-rendering-page">
      <div className="conditional-rendering-container">
        <h1>Editable Text Input</h1>
        {isEditable ? (
          <div className="field-edit-btn-container">
            <p>{fieldValue}</p>
            <button
              className="btn"
              type="submit"
              onClick={() => setIsEditable(false)}
            >
              Edit
            </button>
          </div>
        ) : (
          <>
            <input
              type="text"
              className="input-box"
              onChange={e => setFieldValue(e.target.value)}
              value={fieldValue}
            />
            <button
              className="btn"
              type="submit"
              onClick={() => setIsEditable(true)}
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ConditionalRendering
