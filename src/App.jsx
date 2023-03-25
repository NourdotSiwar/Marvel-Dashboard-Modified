import { useState } from 'react'
import './App.css'

import NavBar from './Components/NavBar.jsx'
import Card from './Components/Card.jsx'
import List from './Components/List.jsx'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='sidebarDiv'> 
      <NavBar />
      </div>

      <div className='cardDiv'>
      <Card />
      <Card />
      <Card />
      </div>

      <div className='listDiv'>
      <List />
      </div>

    </div>
  )
}

export default App
