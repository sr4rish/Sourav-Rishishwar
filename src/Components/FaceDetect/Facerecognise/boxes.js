import React from 'react';
import './Facerecognise.css';

const Boxes = ({ rect }) => {
    return (
        <div
            className='bounding-box'
            style={{ top: rect.topRow, right: rect.rightCol, bottom: rect.bottomRow, left: rect.leftCol }}
        ></div>
    )
}

export default Boxes;