import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';

const rootReducer = combineReducers(reducers)

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// Это стандартная вещь для redux с их документации
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
