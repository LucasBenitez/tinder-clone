import React, { useReducer, useState} from 'react'
import { StyleSheet } from 'react-native'
import store from './store';
import { Provider } from 'react-redux';
import MainNavigator from './navigation';
export default function App() {
  return (
    <Provider store={store}>
    <MainNavigator />
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
