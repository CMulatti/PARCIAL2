import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './freelancer.css'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import Admin from './pages/Admin.jsx'
import { useBirds } from './hooks/useBirds.js'

function App() {
  const [currentPage, setCurrentPage] = useState('home') //track which page to show
  const [selectedBird, setSelectedBird] = useState(null) // keep bird the user clicked on, so Detail can show it
  const { birds, addBird } = useBirds() //return bird array +  function to add bird.


  //called when user clicks a bird
  const handleBirdClick = (bird) => {
    setSelectedBird(bird)
    setCurrentPage('detail')
  }

  //used in Detail, Admin
  const handleBackToHome = () => {
    setCurrentPage('home')
    setSelectedBird(null)
  }

  return (
    <>
       {/*navbar receives current page and setCurrentPage so that is can change it*/}
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/*only render home when current page===home*/}
      {currentPage === 'home' && (
        <Home birds={birds} onBirdClick={handleBirdClick} />
      )}
      
      {/*only render detail if we are on Detail AND there is a selected bird*/}
      {currentPage === 'detail' && selectedBird && (
        <Detail bird={selectedBird} onBack={handleBackToHome} />
      )}
      
      {/*render admin when current page === Admin*/}
      {currentPage === 'admin' && (
        <Admin birds={birds} onAddBird={addBird} onBack={handleBackToHome} />
      )}
    </>
  )
}

export default App