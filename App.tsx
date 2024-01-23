/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from './src/navigation/stackNavigation/StackNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, sagaMiddleware, store } from './src/store/store';
import mySaga from './src/redux/saga/saga';
import GetStatedScreen from './src/component/screen/getStated/GestStated';

sagaMiddleware.run(mySaga);


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <StackNavigation />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider> 
  );
}

export default App;