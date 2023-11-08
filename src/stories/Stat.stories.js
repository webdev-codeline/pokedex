import React from 'react';

import { View } from 'react-native';
import { Stat } from '../components/Stat';
import { colors } from '../utils/pokemonTypeColors.helper';

const StatData = {
  title: 'StatData',
  component: Stat,
  args: {
    name: 'hp',
    value: 1,
    typeColor: colors['darkenGrass'],
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default StatData;

export const Basic = {};
