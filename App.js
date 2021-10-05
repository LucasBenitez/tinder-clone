import React from 'react'
import store from './store';
import { Provider } from 'react-redux';
import MainNavigator from './navigation';
import { init } from './db';

init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect');
    console.log(err.message);
  })
  
export default function App() {
  return (
    <Provider store={store}>
    <MainNavigator />
  </Provider>
  );
}
