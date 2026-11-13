import { useState } from 'react'
import './App.css'
import CreateCitizens from './pages/CreateCitizens'
import ReadCitizens from './pages/ReadCitizens'
import UpdateCitizens from './pages/UpdateCitizens'
import {Router, Routes, Route, Link, useRoutes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)


  let element = useRoutes ([
    {
      path: "/",
      element: "Home Page"
    },
    {
      path: "/citizen",
      element: <CreateCitizens />
    },
    {
      path: "/town",
      element: <ReadCitizens />
    },
    {
      path: "/town/:id/edit",
      element: <UpdateCitizens />
    }
  ]);

  return (
    <div className="App">
      <h1>Animal Crossing: My Citizens</h1>
        {/* Navigation */}
        <div className="side-menu">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/citizen">Add A Citizen</Link>
              <Link to="/town">My Town</Link>
            </nav>
          
          
          {/* Routes */}
          {/*
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/citizen" element={<Add A Citizen/>} />
              <Route path="/town" element={<My Town/>} />
            </Routes>
          */}
            
        </div>
        {element}
    </div>
  )
}

export default App
