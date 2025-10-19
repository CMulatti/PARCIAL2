import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './freelancer.css'
import NavBar from './components/NavBar.jsx'
import BirdForm from './components/BirdForm.jsx'
import BirdCard from './components/BirdCard.jsx'


function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedBird, setSelectedBird] = useState(null)
  const [birds, setBirds] = useState([])

  // Load birds from localStorage on component mount
  useEffect(() => {
    const savedBirds = JSON.parse(localStorage.getItem('birds') || '[]')
    setBirds(savedBirds)
  }, [])

  // Save birds to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('birds', JSON.stringify(birds))
  }, [birds])

  const handleAddBird = (newBird) => {
    const birdWithId = {
      ...newBird,
      id: Date.now()
    }
    setBirds([...birds, birdWithId])
  }

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
  <>
    {/* Masthead */}
    <header className="masthead" id="mainNav">
      <div className="masthead-container">
        <img 
          className="masthead-avatar" 
          src="/bird-icon.png" 
          alt="AvesIcon"
        />
        <h1 className="masthead-heading">Aves de Chile</h1>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <i className="divider-custom-icon fas fa-star"></i>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading">Web de avistamientos de aves chilenas</p>
      </div>
    </header>

      {/* Birds Gallery */}
    <section className="portfolio-section">
      <div className="container">
        <h2 className="page-section-heading text-center">¿Has visto estas aves?</h2>
        
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <i className="divider-custom-icon fas fa-star"></i>
          <div className="divider-custom-line"></div>
        </div>

        {birds.length === 0 ? (
          <p className="alert alert-info">
            No hay aves registradas aún. El administrador debe agregar algunas!
          </p>
        ) : (
            <div className="row">
              {birds.map(bird => (
                <div key={bird.id} className="col-md-4 mb-4">
                  <BirdCard bird={bird} onClick={() => handleBirdClick(bird)} />
                </div>
              ))}
            </div>
          )}
      </div>
    </section>

    <section className="about-section">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <p>Aves de Chile es un sitio web creado para aprender a usar React</p>
      </div>
    </section>
    </>
      )}

      {currentPage === 'detail' && selectedBird && (
        <div className="container mt-5">
          <button className="btn btn-secondary mb-4" onClick={handleBackToHome}>
            ← Volver
          </button>
          <div className="row">
            <div className="col-md-6">
              <img src={selectedBird.image} alt={selectedBird.name} className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h1>{selectedBird.name}</h1>
              <p className="lead">{selectedBird.description}</p>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'admin' && (
        <div className="container mt-5">
          <h1 className="mb-4">Bienvenido Administrador</h1>
          
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Creador de aves</h2>
                  <BirdForm onAddBird={handleAddBird} />
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Administrador de usuarios</h2>
                  <p className="text-muted">Próximamente...</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Moderar avistamientos</h2>
                  <p className="text-muted">Próximamente...</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5>Aves registradas: {birds.length}</h5>
                  <button className="btn btn-primary w-100 mt-3" onClick={handleBackToHome}>
                    Ir a página principal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  )
}

export default App