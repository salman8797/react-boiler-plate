import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import createSagaMiddelWear  from 'redux-saga';
import rootSaga from "./actions";

const sagaMiddelWear = createSagaMiddelWear();

const store = compose(
    applyMiddleware(sagaMiddelWear),
    window.devToolsExtension && window.devToolsExtension())
    (createStore)(rootReducer);

sagaMiddelWear.run(rootSaga);

export default store;