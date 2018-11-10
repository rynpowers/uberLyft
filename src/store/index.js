import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';
// import { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
