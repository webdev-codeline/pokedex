// react
import React from 'react';

import { Text, View } from 'react-native';
// react-navigation

// libs
import { Demo } from '@/components/Demo';
import Constants from 'expo-constants';

// configs
// import client from './client';

// styles
// import { DetailsScreen } from './src/screens/DetailsScreen';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>Open up App/ to start working on your app!</Text>
      <Demo></Demo>
    </View>
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
