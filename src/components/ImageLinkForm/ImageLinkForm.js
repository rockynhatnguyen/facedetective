import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className='imagelinkform'>
      <p className='f1 main-title'>Face Detective</p>
      <p className='f3 pa3'>
        This Magic Brain will detect faces in your pictures. Paste an image URL to begin.
      </p>
      <div className='center'>
        <div className='form pa4 br2 w-60 shadow-5 center'>
          <input className='f4 p2 w-70 center' type='text' onChange={onInputChange}/>
          <button className='button w-25 grow f4 br2 link ph3 pv2 dib white' onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
