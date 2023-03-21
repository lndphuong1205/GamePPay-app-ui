/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, createContext } from 'react';
import NavigationComponent from './Navigation';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class App extends Component {

  render() {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name='Tab' component={NavigationComponent} />
            <Stack.Screen name='Detail' component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

export default App;
