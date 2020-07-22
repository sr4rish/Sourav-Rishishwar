import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';
import {setInput, setUser} from './reducers';
import {registerEmail, registerPassword, registerName} from './Components/Register/reducers';
import {setSignInEmail, setSignInPassword} from './Components/Signin/reducers'
import {setMRInput} from './Components/MovieReviews/reducer'
import {setRRInput} from './Components/RestaurantReviews/reducer'
import 'tachyons';

// const logger = createLogger();
const rootreducer = combineReducers({setRRInput, setMRInput, setInput, setUser,registerEmail, registerPassword, registerName, setSignInEmail, setSignInPassword})
const store = createStore(rootreducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
