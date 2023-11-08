import React from 'react';

import { View } from 'react-native';
import { EvolutionIcon } from '../components/EvolutionIcon';

const IconData = {
  title: 'IconData',
  component: EvolutionIcon,
  args: {
    pokemonId: 2,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default IconData;

export const Basic = {};
