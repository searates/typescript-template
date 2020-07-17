import {
  createStore,
  compose,
  applyMiddleware,
  Reducer,
  Middleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(initialState: object, rootReducer: Reducer) {
  const middlewares: Middleware[] = [];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(require('redux-immutable-state-invariant').default());
  }

  middlewares.push(thunk);

  if (process.env.NODE_ENV === 'development') {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares)),
    );
  }

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}
