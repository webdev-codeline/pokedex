import React from 'react';
import { View } from 'react-native';
import { Stat } from '../components/Stat';
import { colors } from '../utils/pokemonTypeColors.helper';

type TStatDataProps = {
  title: string;
  component: React.FC<any>;
  args: TArgs;
  decorators: Array<(Story: React.FC) => JSX.Element>;
};

type TArgs = {
  name: string;
  value: number;
  typeColor: string;
};

const StatData: TStatDataProps = {
  title: 'StatData',
  component: Stat,
  args: {
    name: 'hp',
    value: 1,
    typeColor: colors['darkenGrass'],
  },
  decorators: [
    (Story: React.FC) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default StatData;

export const Basic = {};
