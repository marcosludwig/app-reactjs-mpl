import './style.css'
import React, { useState } from 'react';

const PhotoExhibition = ({ width, height }) => {
  const [photos, setPhotos] = useState([]);
  const [counter, setCounter] = useState(1);

  const addPhoto = () => {
    const url = `https://picsum.photos/${width}/${height}?random=${counter}`;
    setPhotos([...photos, url]);
    setCounter(counter + 1);
  };

  const clearPhotos = () => {
    setPhotos([]); // Limpa o array de fotos
    setCounter(1); // Reinicia o contador
  };

  return (
    <div className="photo-exhibition">
      <h1>Photo Exhibition</h1>
      <button onClick={addPhoto}>Add Photo</button>
      <button onClick={clearPhotos}>Clear Photos</button> 
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`legenda da foto ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PhotoExhibition;