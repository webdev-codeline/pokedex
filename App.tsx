// react
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// libs
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';

// redux
import { store } from '@redux/store';

// configs
import client from './client';

// screens
import { Details } from '@screens/Details';
import { Home } from '@screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Details' component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}

let AppEntryPoint = App;

// TODO can be validated via zod
if (Constants?.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
