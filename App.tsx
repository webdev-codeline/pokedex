// react
import React from 'react';

// libs
import Constants from 'expo-constants';

// configs
// import client from './client';

// styles
import { Details } from './src/screens/Details';
import { IconFiles } from './src/utils/iconNames.helper';
import { colors } from './src/utils/pokemonTypeColors.helper';

function App() {
  return (
    <Details
      Icon={IconFiles.BugIcon}
      typeColor={colors['grass']}
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
        stats: [
          { name: 'hp', value: 4 },
          { name: 'attack', value: 1 },
          { name: 'defense', value: 6 },
          { name: 'special-attack', value: 2 },
          { name: 'special-defense', value: 3 },
          { name: 'speed', value: 5 },
        ],
        evolutionIds: [2, 4, 6, 8, 10, 12],
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
