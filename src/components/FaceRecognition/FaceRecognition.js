import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, noFace, errorStatus }) => {
  if (noFace && errorStatus === 400) {
    return (
      <div className='center'>
        <h1>URL not an image.</h1>
      </div>
    )
  } else if (noFace) {
    return (
      <div className='center'>
        <h1>No face detected.</h1>
      </div>
    )
  }

  if (imageUrl === '') {
    return null;
  }

  return (
    <div className='center ma'>
      <div className="absolute">
        <img className='face-image' id='inputimage' src={ imageUrl } alt='Detected face.'/>
        <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  )
}

export default FaceRecognition;
