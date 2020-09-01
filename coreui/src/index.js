import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'

// qiankun
import { registerMicroApps, start } from 'qiankun';

// shared
import shared from "./shared";

React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('mainframe')
);

// qiankun starts
registerMicroApps([
  {
    name: 'MicroAppReact', // app name registered
    entry: '//localhost:10100',  //'//localhost:10100',
    container: '#microframe',
    activeRule: '/react',
    props: { shared }
  },  
  {
    name: 'MicroAppReactHome', // app name registered
    entry: '//localhost:10200',  //'//localhost:10100',
    container: '#microframe',
    activeRule: '/home',
    props: { shared }
  }
], {
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
});

// start()
const startQiankun = () => {
  setTimeout(() => {
    if (document.getElementById('microframe')) {
      start()
    } else {
      startQiankun()
    }
  }, 200)
};
startQiankun();

// qiankun ends

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();