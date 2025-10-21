{/*this fucntion receives 2 props: bird, the bird object to show in detail passed from App.jsx when a card is clicked
  and onBack, a callback function that goes back to Home, also passed from App.jsx*/}

function Detail({ bird, onBack }) {
  return (
    <div className="container mt-5 detail-page">
      <button className="btn btn-secondary mb-4" onClick={onBack}> Volver {/*when clicked, we call the parent's onBack function*/}
      </button>
      <div className="row">
        <div className="col-md-6">
          <img src={bird.image} alt={bird.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h1>{bird.name}</h1>
          <p className="lead">{bird.description}</p>
        </div>
      </div>
    </div>
  )
}
export default Detail;