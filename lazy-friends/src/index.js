import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(applyMiddleware(promise, thunk)))

const background = require('./images/background.jpg')
const sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    backgroundImage: 'url(' + background + ')',
    height: '1500px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
