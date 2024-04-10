import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar/>
    <h2>Filmax2</h2>
    <Outlet />
    </>
  )
}

export default App
