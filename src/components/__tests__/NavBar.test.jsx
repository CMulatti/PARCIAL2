import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../NavBar';

describe('Componente NavBar', () => {
  it('debe cambiar a la página home cuando se hace click en Inicio', () => {
    let paginaLlamada = '';  //Simple variable to track which page was requested, we start it as an empty string
    const mockSetCurrentPage = (pagina) => { //create fake function that pretends to be setCurrentPage
      paginaLlamada = pagina; //change value to either home or admin
    };
    
    render(<NavBar currentPage="admin" setCurrentPage={mockSetCurrentPage} />);   //pretend we are on the Admin page
    
    const linkInicio = screen.getByText(/Inicio/i); //find inicio link on the page
    fireEvent.click(linkInicio);   //simulate user clicking inicio link. This should call mockSetCurrentPage('home')
    
    expect(paginaLlamada).toBe('home');  //check the variable, check if pagina llamada equals home or not. If yes, then it passes the test
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