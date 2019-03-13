/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import TestModule from './containers/testModule';

import appReducer, { initialState } from './appReducer';
import TodoScreen from './containers/TodoScreen';

type Props = {};
const store = createStore(appReducer, initialState);
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container} >
        <Provider store={store}>
          <View style={styles.container}>
            <TodoScreen />
          </View>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
