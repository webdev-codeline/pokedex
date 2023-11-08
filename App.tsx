// react
import React from 'react';

// react-navigation

// libs
import { Home } from '@/screens/Home';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';

// configs
import client from './client';

// styles
// import { DetailsScreen } from './src/screens/DetailsScreen';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: 'red' }}>
    //   <Text>Open up App/ to start working on your app!</Text>
    //   <Demo></Demo>
    // </View>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='Home' component={Home} />
    //     {/* <Stack.Screen name='Details' component={DetailsScreen} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

let AppEntryPoint = App;

// TODO can be validated via zod
if (Constants?.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
