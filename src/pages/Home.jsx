import BirdCard from '../components/BirdCard.jsx'

{/*function that receives 2 props: birds, an array of bird objects from App.jsz via useBirds hook & onBirdClick, a callback fucntion
  that handles clicking a bird to go to the Detail page*/}
function Home({ birds, onBirdClick }) {
  return (
    <>
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
                <div key={bird.id} className="col-md-4 mb-4">   {/*for each bird we render a birdCard inside a Bootstrap column*/}
                  <BirdCard bird={bird} onClick={() => onBirdClick(bird)} />   {/*onBirdClick forwards the bird to the parent App.jsx*/}
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
  )
}
export default Home;