import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
  if (imageUrl === '') {
    return null;
  }

  return (
    <div className='center ma'>
      <img className='face-image' src={ imageUrl } alt='Detected face.'/>
    </div>
  )
}

export default FaceRecognition;
