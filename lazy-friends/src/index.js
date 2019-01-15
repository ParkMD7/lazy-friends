// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// user files
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import reducers from './reducers'


const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(applyMiddleware(promise, thunk)))

const background = require('./images/background.jpg')
const sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    backgroundImage: 'url(' + background + ')',
    height: '1500px'
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <div style={ sectionStyle }>
        <div className="darken-overlay">

        </div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
