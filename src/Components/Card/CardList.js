import React from 'react';
import Card from './Card';
import boygirl from './boygirl.jpg'
import sentiment from './sentiment.jpg'
import './card.css'

const CardList = ({onRouteChange}) => {
    return (
        <div class="cardlist">
            <Card 
                name='Face Detection Project'
                intro='An opencv haarcasde based image recognization model' 
                onRouteChange={onRouteChange}
                route='FaceDetect'
                image={boygirl}/>
            <Card 
                name='Movie Reviews Sentimental Analysis' 
                intro='LSTM based sentimental analysis model'
                onRouteChange={onRouteChange}
                route='movieReviews'
                image={sentiment}/>
            <Card 
                name='Restuarant Reviews Sentimental Analysis' 
                intro='Naive Bayes classifier based sentimental analysis model'
                onRouteChange={onRouteChange}
                route='restaurantReviews'
                image={sentiment}/>
        </div>
    )
}

export default CardList;