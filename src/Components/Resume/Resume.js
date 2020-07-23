import React from 'react';
import ProjectCardLive from '../ProjectCard/ProjectCardLive';
import ProjectCardSource from '../ProjectCard/ProjectCardSource';
import './intro.css';
import faceDetect from '../Images/FaceDetectApp.png';
import restaurantImage from '../Images/RestaurentReview.png'
import churn from'../Images/customerChurn.jpeg'
import commentClassification from'../Images/commentClassification.png'
import faceRecgonize from'../Images/FaceRecgonise.jpg'
import fraud from'../Images/fraud.jpg'
import fake from'../Images/fakeNews.png'
import resumePhoto from '../Images/resumeNew.png'


class Resume extends React.Component {
    render(){
        const { onRouteChange } = this.props;
        return (
            <div class='bkimg'>
                <article className="center pa3 pa4-ns b-none">
                    <div className="tc dib">
                        <img src={resumePhoto} className="br-100 dib mr5" width='400rem' height='400rem' title="Resume photo" alt=''/>
                    </div>
                    <div className='tc ma3 mt5 black'>
                        <h1 className='f2 b'>Hi, I'm <span className='f1 b light-red'>Sourav Rishishwar</span></h1>
                        <h2>About Me</h2>
                        <p className="lh-copy measure center b f6">
                        I am a Full Stack Data Scientist with enthusiasm and focused on
                        Machine and Deep Learning.

                        I am passionate about building data driven solution and learning
                        everyday to grow professionally in the AI field.
                    </p>
                    <a class="f5 link dim ba bw1 ph3 pv2 ma2 dib red pointer" href='https://dl.orangedox.com/AJl5I2' target="_blank" rel="noopener noreferrer">Resume</a>
                    <div>
                    <div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" height='1rem' width='1rem' viewBox="0 0 512 512">
                            <path fill="red" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                        </svg>
                        <a className="black mr4 hover-light-red" href="tel:+91 7987483842" target="_blank" rel="noopener noreferrer">+91 7987483842</a>
                    {/* </div>
                    <div> */}
                        <svg className="ml2 mr2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" height='1rem' width='1rem' viewBox="0 0 512 512"><path fill="red" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                        <a className="black ml1 hover-light-red" href="mailto:rishishwar.sourav@gmail.com" target="_blank" rel="noopener noreferrer">rishishwar.sourav@gmail.com</a>
                    </div>
                    </div>
                    </div>
                </article>
            <section className="tc b-none">
                    <h2 className="w-100 athelas b f1 ph3 ph0-l mb5">Projects</h2>
                    <ProjectCardLive
                        name='Fake News Detection Model'
                        intro='A LSTM based model to detect fake news just by using news title.
                        The model is built using Tensorflow 2.0 and deployed as Flask API on
                        Google Cloud Platform' 
                        onRouteChange={onRouteChange}
                        sourceCode='https://github.com/sr4rish/FakeNewsClassfication-LSTM'
                        route='movieReviews'
                        image={fake}/>
                    <ProjectCardSource
                        name='Face Recogonization Model'
                        intro='A CNN based model to recogonize face of two great footballers.
                        Model consist of three convolution layers and a fully connected neural
                        network built on Tensorflow 2.0.'
                        sourceCode='https://github.com/sr4rish/Face-Recognition'
                        image={faceRecgonize}/>
                    <ProjectCardLive
                        name='Face Detection App'
                        intro='An OpenCV haarcasde based face detection model.
                        A python program to detect multiple faces from the image url.
                        Deployed as Flask API on Heroku plaform.' 
                        onRouteChange={onRouteChange}
                        route='FaceDetect'
                        sourceCode='https://github.com/sr4rish/Face-Detect-Opencv-Api'
                        image={faceDetect}/>
                    <ProjectCardSource
                        name='Patient Comment Detection Using Ensemble Learning'
                        intro='A Voting Classifier model incorporating a Logistic Regression Classifier,
                        a Random Forest Classifier and a XG Boost classifier to detect comments
                        from patients dataset.'
                        sourceCode='https://github.com/sr4rish/Patient-Comment-Detector'
                        image={commentClassification}/>
                    <ProjectCardLive
                        name='Restuarant Reviews Sentimental Analysis'
                        intro='Naive Bayes classifier based sentimental analysis model
                        built on restrarant reviews. A bag of words technique implemented
                        using count vectorizer for feature extraction'
                        onRouteChange={onRouteChange}
                        route='restaurantReviews'
                        sourceCode='https://github.com/sr4rish/Sentiment-Analysis-of-Restaurant-Review'
                        image={restaurantImage}/>
                    <ProjectCardSource
                        name='Fraud Detection Model'
                        intro='Fraud detection models employing Random Forest Classifier 
                        on labelled credit card dataset and Mini Batch K-means clustering 
                        on unlabeled bank transactions dataset.'
                        sourceCode='https://github.com/sr4rish/Fraud-detection'
                        image={fraud}/>
                    <ProjectCardSource
                        name='Customer Churn Predictor'
                        intro='ANN model implemented using Tensorflow 2.0 to predict customer churn 
                        on bank’s customers data; leveraged stochastic gradient descent
                        using Adam optimizer algorithm'
                        sourceCode='https://github.com/sr4rish/Customer-Churn-Predictor'
                        image={churn}/>
            </section>
            <footer className="pv2 ph3 bg-green tc">
                <h1 className='tc white b'>CONTACT</h1>
                <a class="link near-black hover-red dib h2 w2 mr3" href="mailto:rishishwar.sourav@gmail.com" target="_blank" rel="noopener noreferrer" title="Mail">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                </a>
                <a class="link near-black hover-gray dib h2 w2 mr3" href="tel:+91 7987483842" target="_blank" rel="noopener noreferrer" title="Mobile">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                        </svg>
                </a>
                <a class="link hover-dark-blue near-black dib h2 w2 mr3" href="https://www.linkedin.com/in/sourav-rishishwar-71aa02113/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
                </a>
                <a class="link near-black hover-gray dib h2 w2 mr3" href="https://github.com/sr4rish" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                </a>
                <a class="link near-black hover-dark-blue dib h2 w2 mr3" href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
                </a>
                <hr className='mw7 bb bw1 b--black-50'></hr>
                <p className="black">© 2020 - developed by <a href="https://github.com/sr4rish" target="_blank" rel="noopener noreferrer" className="black">Sourav Rishishwar</a></p>
            </footer>
        </div>
    );
    }
}

export default Resume;