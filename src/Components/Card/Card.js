import React from 'react';
import './card.css'

const Card = ({ name, intro, onRouteChange, route, image }) => {
    return (
        <div onClick={()=>onRouteChange(route)} class = 'card'>
            <img className="db br2 br--top w-100 h-50" alt='roboimg' src={image}/>
            <hr className="mw3 bb bw1 b--white-50"></hr>
            <div className=''>
                <p class='Name'>{name}</p>
                <p class='Descp' >{intro}</p>
            </div>
        </div>
    )
}

export default Card;