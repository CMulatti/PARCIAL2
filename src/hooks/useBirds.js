import { useState, useEffect } from 'react';

export function useBirds() {
  const [birds, setBirds] = useState([]);

  // Load birds from localStorage 
  useEffect(() => {
    const savedBirds = JSON.parse(localStorage.getItem('birds') || '[]');
    setBirds(savedBirds);
  }, []);

  //Save birds to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('birds', JSON.stringify(birds));
  }, [birds]);

  const addBird = (newBird) => {
    const birdWithId = {
      ...newBird,
      id: Date.now()
    };
    setBirds([...birds, birdWithId]);
  };

  return { birds, addBird };
}