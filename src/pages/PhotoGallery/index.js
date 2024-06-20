import React from 'react';
import { useParams } from 'react-router-dom';
import PhotoExhibition from '../../components/PhotoExibition';

const PhotoGallery = () => {
  const { width, height } = useParams();

  return (
    <div className="gallery">
      <PhotoExhibition width={width} height={height} />
    </div>
  );
};

export default PhotoGallery;