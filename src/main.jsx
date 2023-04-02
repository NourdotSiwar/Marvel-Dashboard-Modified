import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './routes/Layout'
import DetailView from './routes/DetailView'
import { Link } from 'react-router-dom'
import Charts from './Components/Charts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/CharDetails/:id" element={<DetailView />} />
          <Route 
            path="*"
            element={
            <main style={{fontWeight: "bold", fontSize: "2rem", textAlign: "center"}}
            >
              <p>There's nothing here!</p>
              <Link to="/">
                Back to Home
              </Link>
            </main>
            }
          />
          <Route path="/charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
