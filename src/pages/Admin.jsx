import BirdForm from '../components/BirdForm.jsx'

{/*birds=array, the list of all birds from the UseBirds hook*/}
{/*onAddBird, the function that adds a new bird, passed from App, created in UseBirds*/}
{/*onBack, function to go back to homepage - also from App*/}
function Admin({ birds, onAddBird, onBack }) {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Bienvenido Administrador</h1>
      
      {/*inside the first card, we render the BirdForm component*/}
      {/*it passes down the onAddBird fucntion from App to BirdForm*/}
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Creador de aves</h2>
              <BirdForm onAddBird={onAddBird} />
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
              <button className="btn btn-primary w-100 mt-3" onClick={onBack}>
                Ir a página principal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Admin;