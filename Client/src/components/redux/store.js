import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducer/reducer.js';

const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; //linea para conectar con redux dev tools

const store=createStore(
    rootReducer,composeEnhancer
    (applyMiddleware(thunk))



);
export default store;