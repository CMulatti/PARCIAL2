import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './App.css'
import './freelancer.css'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import Admin from './pages/Admin.jsx'
import { useBirds } from './hooks/useBirds.js'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedBird, setSelectedBird] = useState(null)
  const { birds, addBird } = useBirds() 


  const handleBirdClick = (bird) => {
    setSelectedBird(bird)
    setCurrentPage('detail')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    setSelectedBird(null)
  }

  return (
    <>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <Home birds={birds} onBirdClick={handleBirdClick} />
      )}
      
      {currentPage === 'detail' && selectedBird && (
        <Detail bird={selectedBird} onBack={handleBackToHome} />
      )}
      
      {currentPage === 'admin' && (
        <Admin birds={birds} onAddBird={addBird} onBack={handleBackToHome} />
      )}
    </>
  )
}

export default App