/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react'

import store from './src/redux/storage'
import {Provider} from 'react-redux'

store.subscribe(() => console.log(store.getState()))

const MainApp=()=>{
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MainApp);
