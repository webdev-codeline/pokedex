// react
import React from 'react';
import { Text } from 'react-native';

// libs
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';

// configs
import client from './client';

// styles
import { SafeView } from './App.styles';

function App() {
  return (
    <SafeView>
      <ApolloProvider client={client}>
        <Text>Hello</Text>
      </ApolloProvider>
    </SafeView>
  );
}

let AppEntryPoint = App;

// TODO can be validated via zod
if (Constants?.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
