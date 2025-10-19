// components/BirdForm.jsx
import { useState } from 'react';

export default function BirdForm({ onAddBird }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
      image: imagePreview
    };

    onAddBird(newBird);

    // Reset form
    setFormData({ name: '', description: '', image: null });
    setImagePreview(null);
    setError('');
    
    alert('Ave guardada exitosamente! Ahora aparecerá en la página principal.');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

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

      <button type="submit" className="btn btn-primary">
        Guardar Ave
      </button>
    </form>
  );
}