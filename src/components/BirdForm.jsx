import { useState } from 'react';

function BirdForm({ onAddBird }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [touched, setTouched] = useState({
    name: false,
    description: false,
    image: false
  }); //Track which fields the user has interacted with
  const [submitted, setSubmitted] = useState(false); //Track if form was submitted
  const [success, setSuccess] = useState(false);

  //we define all validation errors in one single object
  const errors = {
    name: formData.name.trim() === '' ? 'Por favor ingresa el nombre del ave.': /\d/.test(formData.name) ? 'El nombre del ave no puede contener números!' : '',
    description: formData.description.trim() === '' ? 'Por favor ingresa la descripción!' : '',
    image: !imagePreview ? 'Por favor selecciona una imagen!' : ''
  };

  //Check if a field is valid
  const isValid = (field) => !errors[field];

  //Return the correct CSS class for each field
  const fieldClass = (field) => {
    const show = touched[field] || submitted;
    if (!show) return 'form-control';
    return isValid(field) ? 'form-control is-valid' : 'form-control is-invalid';
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  //mark field as "touched" when user leaves it
  const handleBlur = (e) => {
    const name = e.target.name;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
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
        setTouched(prev => ({ ...prev, image: true })); //mark image as touched
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    
    // Check if all fields are valid
    if (isValid('name') && isValid('description') && isValid('image')) {
      const newBird = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        image: imagePreview
      };

      onAddBird(newBird);

      // Reset form
      setFormData({ name: '', description: '', image: null });
      setImagePreview(null);
      setTouched({ name: false, description: false, image: false }); //Reset touched
      setSubmitted(false); //Reset submitted
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate> {/* noValidate to disable browser validation */}
      
      {success && (
        <div className="alert alert-success" role="alert">
          Ave guardada exitosamente! Ahora aparecerá en la página principal.
        </div>
      )}

      {/* Name input*/}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre del ave:</label>
        <input
          type="text"
          className={fieldClass('name')} //Dynamic class 
          id="name"
          name="name"
          placeholder="Ingrese nombre del ave"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur} //Track when user leaves field 
          required
        />
        {/*Show error for name*/}
        {(touched.name || submitted) && errors.name && (
          <div className="invalid-feedback d-block">{errors.name}</div>
        )}
      </div>

      {/*Description textarea */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descripción:</label>
        <textarea
          className={fieldClass('description')} //Dynamic class
          id="description"
          name="description"
          rows="5"
          placeholder="Ingrese detalles del ave"
          value={formData.description}
          onChange={handleInputChange}
          onBlur={handleBlur} //track when user leaves field
          required
        />
        {/*Show error for message*/}
        {(touched.description || submitted) && errors.description && (
          <div className="invalid-feedback d-block">{errors.description}</div>
        )}
      </div>

      {/*image input */}
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Imagen del ave:</label>
        <input
          type="file"
          className={fieldClass('image')} 
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {/*Show error for image*/}
        {(touched.image || submitted) && errors.image && (
          <div className="invalid-feedback d-block">{errors.image}</div>
        )}

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
export default BirdForm;