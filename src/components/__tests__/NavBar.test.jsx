import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../NavBar';

describe('Componente NavBar', () => {
  it('debe cambiar a la página home cuando se hace click en Inicio', () => {
    let paginaLlamada = '';  //Simple variable to track what was called, we start it as an empty string
    const mockSetCurrentPage = (pagina) => {
      paginaLlamada = pagina; //change value to either home or admin
    };
    
    render(<NavBar currentPage="admin" setCurrentPage={mockSetCurrentPage} />);
    
    const linkInicio = screen.getByText(/Inicio/i);
    fireEvent.click(linkInicio);
    
    expect(paginaLlamada).toBe('home');  //check the variable
  });

  it('debe cambiar a la página admin cuando se hace click en Admin', () => {
    let paginaLlamada = '';
    const mockSetCurrentPage = (pagina) => {
      paginaLlamada = pagina;
    };
    
    render(<NavBar currentPage="home" setCurrentPage={mockSetCurrentPage} />);
    
    const linkAdmin = screen.getByText(/Admin/i);
    fireEvent.click(linkAdmin);
    
    expect(paginaLlamada).toBe('admin');
  });

  it('debe contener el logo y texto "Aves de Chile"', () => {
    render(<NavBar currentPage="home" setCurrentPage={() => {}} />);
    
    const textoLogo = screen.getByText(/Aves de Chile/i);
    const imagen = screen.getByAltText(/Aves de Chile logo/i);
    
    expect(textoLogo).toBeTruthy();
    expect(imagen).toBeTruthy();
  });

  it('debe contener todos los enlaces de navegación', () => {
    render(<NavBar currentPage="home" setCurrentPage={() => {}} />);
    
    const linkInicio = screen.getByText(/Inicio/i);
    const linkAdmin = screen.getByText(/Admin/i);
    const linkIngresar = screen.getByText(/Ingresar/i);
    const linkCrearCuenta = screen.getByText(/Crear cuenta/i);
    
    expect(linkInicio).toBeTruthy();
    expect(linkAdmin).toBeTruthy();
    expect(linkIngresar).toBeTruthy();
    expect(linkCrearCuenta).toBeTruthy();
  });
});