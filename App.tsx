// react
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// libs
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';

// configs
import client from './client';

// screens
import { Details } from '@screens/Details';
import { Home } from '@screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

let AppEntryPoint = App;

// TODO can be validated via zod
if (Constants?.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
