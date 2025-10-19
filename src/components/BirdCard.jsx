export default function BirdCard({ bird, onClick }) {
  return (
    <div
      className="bird-card"
      onClick={onClick}
    >
      <img 
        src={bird.image} 
        alt={bird.name}
      />
      <div className="card-body">
        <h5 className="card-title">{bird.name}</h5>
        <p className="card-text">{bird.description}</p>
      </div>
      <div className="card-footer bg-white border-top-0">   
        <small className="text-muted">Haz clic para ver más detalles</small>
      </div>
    </div>
  );
}