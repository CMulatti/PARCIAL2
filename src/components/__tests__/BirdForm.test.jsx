//Does the form show an error if we submit it without a name?

import { render, screen, fireEvent } from '@testing-library/react';
import BirdForm from '../BirdForm';

describe('Componente BirdForm', () => {
  it('debe mostrar error cuando se envía el formulario sin nombre', () => {
    render(<BirdForm onAddBird={() => {}} />);
    
    const boton = screen.getByRole('button', { name: /Guardar Ave/i });
    fireEvent.click(boton);
    
    const mensajeError = screen.getByText(/Por favor ingresa el nombre del ave/i);
    expect(mensajeError).toBeTruthy();
  });
});