import { useState } from 'react';

function BirdForm({ onAddBird }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); //success starts as false, so nth is rendered at first

  //we run this function each time the user types sth into a form field
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // update state variable formData "...prev" because when the user types in one field, we don't want the other two fields to be reset
    setFormData(prev => ({
      ...prev,
      [name]: value //update only the one that changed
    }));
    setError('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; //we take the first file
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      const reader = new FileReader(); //reads the file as Base64
      reader.onload = (event) => {
        setImagePreview(event.target.result); //when ready, swt image preview to that string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page from refreshing which is the browser's default behaviour 
    
    // Validation
    if (!formData.name.trim()) {
      setError('Por favor ingresa el nombre del ave.');
      return;
    }

    if (/\d/.test(formData.name)) {
      setError('El nombre del ave no puede contener números!');
      return;
    }

    if (!formData.description.trim()) {
      setError('Por favor ingresa la descripción!');
      return;
    }

    if (!imagePreview) {
      setError('Por favor selecciona una imagen!');
      return;
    }

    // Create new bird object with base64 image
    const newBird = {
      name: formData.name.trim(),
      description: formData.description.trim(),
      image: imagePreview              //here, we use the imagePreview which is Base64 string, so that we can store it in localStorage
    };

    onAddBird(newBird); //calls function provided by Parent (passed down from Admin as a prop) 

    // Reset form
    setFormData({ name: '', description: '', image: null });
    setImagePreview(null); //null to clear any previous image
    setError(''); // clear any previous error
    setSuccess(true); // mark the operation succeeded. 
    setTimeout(() => setSuccess(false), 3000); //we hide the message after 3 secs, setSuccess is reset
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*if error has a truthy value -not empty, not null, or not false, render this div. Otherwise, render nth*/}
      {error && (                                                   
        <div className="alert alert-danger" role="alert">{error}
        </div>
      )}

      {success && (
      <div className="alert alert-success" role="alert">
        Ave guardada exitosamente! Ahora aparecerá en la página principal.
      </div>
    )}

      {/*render text input for name*/}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre del ave:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Ingrese nombre del ave"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      {/*render a textarea for description*/}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descripción:</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="5"
          placeholder="Ingrese detalles del ave (características, habitat, comportamiento, etc. Puede escribir múltiples párrafos)"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      {/*render a file input for the image and a small preview of it*/}
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Imagen del ave:</label>
        <input
          type="file"
          className="form-control"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div className="mt-3">
            <p className="text-muted">Vista previa:</p>
            <img 
              src={imagePreview} 
              alt="Preview" 
              style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '5px' }}
            />
          </div>
        )}
      </div>

      {/*render a submit button*/}
      <button type="submit" className="btn btn-primary">
        Guardar Ave
      </button>
    </form>
  );
}
export default BirdForm;