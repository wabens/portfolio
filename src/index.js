import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


function* getPortfolio(action) {
  try {
    console.log('GET portfolio', action);
    const getResponse = yield axios.get('/portfolio'); 
    yield put({type: 'SET_PROJECTS', payload: getResponse.data});
 }catch (error) {
    console.log(`Couldn't get portfolio`, error);
    alert(`Sorry, couldn't get the portfolio. Try again later`);
  };
};

function* getTags(action) {
  try {
    console.log('GET tags', action);
    const getResponse = yield axios.get('/portfolio/tags'); 
    yield put({type: 'SET_TAGS', payload: getResponse.data});
 }catch (error) {
    console.log(`Couldn't get tags`, error);
    alert(`Sorry, couldn't get tags. Try again later.`);
  };
};

function* postProject(action){
    try{
        console.log(`POST project`, action.payload);
        yield axios.post(`/portfolio`, action.payload)
        yield put({type: 'GET_PORTFOLIO'})
        
    }catch(error){
        console.log(`Problem adding project`, error);
        alert(`Sorry, couldn't send project. Try again later.`)
        

    }
}


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PORTFOLIO', getPortfolio);
    yield takeEvery('GET_TAGS', getTags);
    yield takeEvery('POST_PROJECT', postProject)

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
