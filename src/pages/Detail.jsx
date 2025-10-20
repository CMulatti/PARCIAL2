export default function Detail({ bird, onBack }) {
  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-4" onClick={onBack}>
        ← Volver
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