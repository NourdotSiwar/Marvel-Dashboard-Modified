// importing all the necessary libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './routes/Layout'
import DetailView from './routes/DetailView'
import { Link } from 'react-router-dom'
import Charts from './Components/Charts'

// this is the main component that is used to render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    // BrowserRouter is used to enable routing
    <BrowserRouter>

      // Routes is used to define the routes of the app
      <Routes>

        // Route is used to define a route
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/CharDetails/:id" element={<DetailView />} />
          <Route path="*" element={
            <main style={{fontWeight: "bold", fontSize: "2rem", textAlign: "center"}} >
              <p>There's nothing here!</p>
              <Link to="/"> Back to Home </Link>
            </main> } />
          <Route path="/charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
