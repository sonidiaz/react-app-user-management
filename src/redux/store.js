import {createStore, applyMiddleware} from 'redux';
import rootDeducer from '../redux/reducer';
import thunk from 'redux-thunk';


const store = createStore(
  rootDeducer, 
  applyMiddleware(thunk)
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../redux/reducer', () => {
    const rootReducerHMR = require('../redux/reducer').default;
    store.replaceReducer(rootReducerHMR);
  });
}

export default store;