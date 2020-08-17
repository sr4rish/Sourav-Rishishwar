import React from 'react';
import {Link} from "react-router-dom";
import Tilt from 'react-tilt';
import './intro.css'

const ProjectCardLive = ({ name, intro, onRouteChange, route, image, sourceCode }) => {
    return (
        <article className = 'projectcard'>
                            <div className="ma2 dark-blue flex-size">
                                <h1 className="f3 athelas mt0 b lh-title">{name}</h1>
                                <p className="f5 f4-l lh-copy athelas">{intro}</p>
                                <Link className="f5 link dim ba bw1 ph3 pv2 ma2 dib pointer green"  to={onRouteChange}>See Live</Link>
                                <a className="f5 link dim ba bw1 ph3 pv2 ma2 dib pointer green" href={sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                            <div className='flex-size'>
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