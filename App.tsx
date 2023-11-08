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
import { Demo } from './src/components/Demo';
import { IconFiles, IconNames } from './src/utils/iconNames.helper';
import { Details } from './src/screens/Details';
import { SvgProps } from 'react-native-svg';
import { colors } from './src/utils/pokemonTypeColors.helper';

function App() {
  return (
    <Details
      Icon={IconFiles.BugIcon}
      typeColor={colors['grass']}
      sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${'1'}.png`}
      darkenTypeColor={colors['darkenGrass']}
      data={{
        id: 333,
        name: 'eevee',
        types: ['grass', 'fire', 'normal'],
        abilities: ['run away', 'adaptability', 'anticipation'],
        height: 0.3,
        weight: 0.5,
        baseStatsTotal: 325,
        baseStatsText:
          'Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.',
      }}
    />
  );
  // return <SafeView></SafeView>;
}

let AppEntryPoint = App;

// TODO can be validated via zod
if (Constants?.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
