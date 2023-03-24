import { useState } from 'react'
import './App.css'

import NavBar from './Components/NavBar'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Marvel World</h1>
      <NavBar />
    </div>
  )
}

export default App
