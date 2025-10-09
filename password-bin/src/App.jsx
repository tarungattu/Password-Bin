import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Bin from './components/Bin'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">
        <Bin />
      </div>
      <Footer/>
    </>
  )
}

export default App
