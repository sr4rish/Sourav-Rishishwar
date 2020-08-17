import React from 'react';
import { connect } from 'react-redux';
import { setMRInput } from './actions';
import real from '../real.png';
import fake from '../fake.png'

const mapStateToProps = state => {
    return {
        reviews: state.setMRInput.movie_review_input,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReviewChange: (event) => dispatch(setMRInput(event.target.value))
    }
}

class ReviewInput extends React.Component {
    constructor() {
        super();
        this.state = {
            ans: "",
            result: "",
        }
    }

    onButtonSubmit = () => {
        //console.log(this.props.review)
        fetch('https://quiet-dusk-48514.herokuapp.com/news/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                news: this.props.reviews
            })
        })
            .then(response => response.json())
            .then(response => {
                //console.log(response)
                //console.log('negative: ' + {negative})
                this.setState({ ans: response })
                //console.log(this.state.ans==='negative')
                if(this.state.ans==='fake'){
                    this.setState({result: fake})}
                else{this.setState({result: real})}
                //console.log('senti: ' + this.state.senti)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div>
                    <p className='f5 fw6 tc mt6 pa2 white center'>
                        This is LSTM based fake news detection model by news title, type out a news title and give it a try
                    </p>
                </div>
                <div className='center pa3'>
                    <input type='text' className='w-70 pl2 br3 ma2 ba' style={{height: '40px'}} onChange={this.props.onReviewChange} />
                    <button
                        className='f4 pb1 link br3 mt2 mb2 grow white bg-purple shadow-2'
                        onClick={this.onButtonSubmit}>Submit</button>
                </div>
                <div className='center ma'>
                    <div className='absolute mt2 pb2'>
                        <img id='inputImage' alt='' src={this.state.result} width='300rem' height='auto' />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewInput);