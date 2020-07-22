import React from 'react';
import BoxArray from './boxArray'

const Facerecognise = ({ faceBox, imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500rem' height='auto' />
                <BoxArray faceBox={faceBox} />
            </div>
        </div>
    );
}

export default Facerecognise;
