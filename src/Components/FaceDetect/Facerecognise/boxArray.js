import React from 'react';
import Boxes from './boxes'

const BoxArray = ({ faceBox }) => {
    return (
        faceBox.map(rect => {
            return <Boxes rect={rect} />
        })
    )
}

export default BoxArray;
