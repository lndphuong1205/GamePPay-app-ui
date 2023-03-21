import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen/CategoryScreen';
import AccountScreen from './src/screens/AccountScreen/AccountScreen';

const Tab = createBottomTabNavigator();

export default function NavigationComponent() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#0aada8',
        }}
      >
        <Tab.Screen
          name="Home" component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'home'} color={color} size={25} light />
            ),
          }}
        />
        <Tab.Screen name="Category" component={CategoryScreen}
          options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'list-ul'} color={color} size={25} light />
            ),
          }}
        />
        <Tab.Screen name="Account" component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'user'} color={color} size={25} light />
            ),
          }}
        />
      </Tab.Navigator>
  );
}