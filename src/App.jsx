import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Enter the amount to pay</h1>
      <div className="card">
        <input type='number' placeholder='0'></input>
      </div>
      <br></br>
      <button id='submit'>PAY</button>
    </>
  )
}

export default App
