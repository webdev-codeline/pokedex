// react
import React, { FC } from 'react';
import { View } from 'react-native';

// components
import { EvolutionIcon, EvolutionIconProps } from '@components/EvolutionIcon';

type IconDataProps = {
  title: string;
  component: FC<EvolutionIconProps>;
  args: Args;
  decorators: ((Story: FC<{}>) => JSX.Element)[];
};

type Args = {
  pokemonId: number;
};

const IconData: IconDataProps = {
  title: 'IconData',
  component: EvolutionIcon,
  args: {
    pokemonId: 2,
  },
  decorators: [
    (Story: FC) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default IconData;

export const Basic = {};
