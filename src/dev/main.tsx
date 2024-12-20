import React from 'react'
import '../styles/global.css'
import ReactDOM from 'react-dom/client'
import { TimePicker } from '../react/components/TimePicker'

const ReactDemo = () => {

    const handleChange = () => {
        alert("hello")
    }

    return (
      <div style={{ padding: '20px' }}>
        <h2>React Time Picker</h2>
        <TimePicker value={new Date()} onChange={handleChange} />
      </div>
    )
}

// Mount React
ReactDOM.createRoot(document.getElementById('react-root')!).render(
    <React.StrictMode>
      <ReactDemo />
    </React.StrictMode>
)