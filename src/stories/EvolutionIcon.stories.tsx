import React from 'react';
import { View } from 'react-native';
import { EvolutionIcon } from '@components/EvolutionIcon';

type TIconDataProps = {
  title: string;
  component: React.FC<any>;
  args: TArgs;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
};

type TArgs = {
  pokemonId: number;
};

const IconData: TIconDataProps = {
  title: 'IconData',
  component: EvolutionIcon,
  args: {
    pokemonId: 2,
  },
  decorators: [
    (Story: React.FC) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default IconData;

export const Basic = {};
