import { persistStore, persistReducer } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../redux/reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Cofige saga middleware
const sagaMiddleware = createSagaMiddleware();
// configer store with persiste reducer and arry of middleware
let store = configureStore({
    reducer: persistedReducer, middleware: (getDefaultMiddleware) => {
        // WARNING: this means that _none_ of the default middleware are added!
        return [sagaMiddleware]
        // or for TS users, use:
        // return new Tuple(myMiddleware)
    },
});
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };