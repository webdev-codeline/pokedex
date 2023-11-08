// react
import React, { FC } from 'react';
import { View } from 'react-native';

// components
import { Stat, StatProps } from '@components/Stat';
import { DarkenPokemonTypes } from '@/types/color';

type ArgsType = {
  options: DarkenPokemonTypes[];
  control: {
    label: string;
    type: string;
  };
};

type StatDataProps = {
  title: string;
  component: FC<StatProps>;
  args: Args;
  decorators: Array<(Story: FC) => JSX.Element>;
  argTypes: {
    typeColor: ArgsType;
  };
};

type Args = {
  name: string;
  value: number;
  typeColor: DarkenPokemonTypes;
};

const StatData: StatDataProps = {
  title: 'StatData',
  component: Stat,
  args: {
    name: 'hp',
    value: 1,
    typeColor: 'darkenGrass',
  },
  argTypes: {
    typeColor: {
      // todo change this array
      options: [
        'darkenBug',
        'darkenDark',
        'darkenDragon',
        'darkenElectric',
        'darkenFairy',
        'darkenFighting',
        'darkenFire',
      ],
      control: { label: 'firstType', type: 'select' },
    },
  },
  decorators: [
    (Story: FC) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default StatData;

export const Basic = {};
