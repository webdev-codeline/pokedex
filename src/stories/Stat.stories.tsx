// react
import React, { FC } from 'react';
import { View } from 'react-native';

// components
import { Stat, StatProps } from '@components/Stat';

// utils
import { colors } from '@utils/colors.helper';

type StatDataProps = {
  title: string;
  component: FC<StatProps>;
  args: Args;
  decorators: Array<(Story: FC) => JSX.Element>;
};

type Args = {
  name: string;
  value: number;
  typeColor: string;
};

const StatData: StatDataProps = {
  title: 'StatData',
  component: Stat,
  args: {
    name: 'hp',
    value: 1,
    // TODO make this a drop down list similar to types
    typeColor: colors['darkenGrass'],
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
