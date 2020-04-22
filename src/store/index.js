// import createSagaMiddleware from 'redux-saga';
// import createStore from './createStore';

// import rootReducer from './modules/rootReducer';
// import rootSaga from './modules/rootSaga';

// const sagaMonitor =
//     process.env.NODE_ENV === 'development'
//         ? console.tron.createSagaMonitor()
//         : null;
// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// const middlewares = [sagaMiddleware];

// const store = createStore(rootReducer, middlewares);

// createSagaMiddleware.run(rootSaga);

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleware = createSagaMiddleware({
    sagaMonitor,
});

const enhancer =
    process.env.NODE_ENV === 'development'
        ? compose(
              console.tron.createEnhancer(),
              applyMiddleware(sagaMiddleware)
          )
        : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
