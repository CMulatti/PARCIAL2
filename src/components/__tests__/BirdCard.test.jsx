//Does the bird card display the bird's name and image correctly?

import { render, screen } from '@testing-library/react';
import BirdCard from '../BirdCard';

describe('Component BirdCard', () => {
  it('debe mostrar el nombre y la imagen del ave', () => {
    const mockBird = {
      id: 1,
      name: 'Cóndor',
      image: '/condor.jpg',
      description: 'Ave grande'
    };

    render(<BirdCard bird={mockBird} onClick={() => {}} />);
    
    const nombreAve = screen.getByText(/Cóndor/i);
    const imagenAve = screen.getByRole('img');
    
    expect(nombreAve).toBeTruthy();
    expect(imagenAve).toHaveAttribute('src', '/condor.jpg');
  });
});