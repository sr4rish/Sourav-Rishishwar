import React from 'react';
import Tilt from 'react-tilt';
import './intro.css'

const ProjectCardLive = ({ name, intro, onRouteChange, route, image, sourceCode }) => {
    return (
        <article class = 'projectcard'>
                            <div className="ml5 w-40 dark-blue">
                                <h1 className="f3 athelas mt0 b lh-title">{name}</h1>
                                <p className="f5 f4-l lh-copy athelas">{intro}</p>
                                <a className="f5 link dim ba bw1 ph3 pv2 ma2 dib pointer green" onClick={()=>onRouteChange(route)} href='/#'>See Live</a>
                                <a className="f5 link dim ba bw1 ph3 pv2 ma2 dib pointer green" href={sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                            <div className='w-60'>
                                <Tilt className="Tilt br3"options={{ max : 5, scale:1}}>
                                    <div className="Tilt-inner">
                                        <img alt='' src={image} 
                                        class='projectImage'/>
                                    </div>
                                </Tilt>
                            </div>
                    </article>
    )
}

export default ProjectCardLive;