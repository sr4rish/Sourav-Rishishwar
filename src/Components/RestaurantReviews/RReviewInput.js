import React from 'react';
import { connect } from 'react-redux';
import { setRRInput } from './actions';
import negative from '../negative.png';
import positive from '../positive.png'

const mapStateToProps = state => {
    return {
        review: state.setRRInput.restaurant_review_input,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReviewChange: (event) => dispatch(setRRInput(event.target.value))
    }
}

class RReviewInput extends React.Component {
    constructor() {
        super();
        this.state = {
            ans: "",
            senti: ""
        }
    }

    onButtonSubmit = () => {
        console.log(this.props.review)
        fetch('https://quiet-dusk-48514.herokuapp.com/sentiment/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                review: this.props.review
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({ ans: response })
                //console.log(this.state)
                if(this.state.ans==='negative'){
                    this.setState({senti: negative})}
                else{this.setState({senti: positive})}
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div>
                    <p className='f5 fw6 pa2 tc mt6 white center'>
                        This is a Naive Bayes classifier based restuarant reviews sentimental analysis model, write a review and give it a try
                    </p>
                </div>
                <div className='center ma3'>
                    <input type='text' className='w-70 pl2 br3 ma2 ba' style={{height: '40px'}} onChange={this.props.onReviewChange} />
                    <button
                        className='f4 pb1 link br3 mr2 mt2 mb2 grow white bg-dark-green shadow-2'
                        onClick={this.onButtonSubmit}>Submit</button>
                </div>
                <div className='center ma'>
                    <div className='absolute mt2'>
                        <img id='inputImage' alt='' src={this.state.senti} width='300rem' height='auto' />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RReviewInput);