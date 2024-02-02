import React, { useState, useEffect } from 'react';

function App() {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDog(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    fetchDogImage();
  }, []);

  if (dog === null) return <p>Loading...</p>;

  return (
    <img src={dog} alt="A Random Dog" />
  );
}

export default App;
