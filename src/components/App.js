// create your App component here
// create your App component here
// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dog, setDog] = useState(null); // Initialize dog as null

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message);
      });
  }, []);

  if (dog === null) return <p>Loading...</p>; // Check if dog is null and display loading message

  return (
    <img src={dog} alt="A Random Dog" />
  );
}

export default App;
