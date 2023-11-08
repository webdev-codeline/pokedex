// react
import React from 'react';
import { View } from 'react-native';

// components
import { Card, CardProps } from '@components/Card';

// types
import { PokemonTypes, pokemonColors } from '@/types/color';

type ArgsType = {
  options: PokemonTypes[];
  control: {
    label: string;
    type: string;
  };
};

type CardDataProps = {
  title: string;
  component: React.FC<CardProps>;
  args: CardProps;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
  argTypes: {
    type: ArgsType;
  };
};

const typeOptions = Object.keys(pokemonColors) as PokemonTypes[];

const CardData: CardDataProps = {
  title: 'CardData',
  component: Card,
  args: {
    id: 2,
    ancestorId: 10,
    name: 'eevee',
    type: 'grass',
    abilities: ['run away', 'adaptability', 'anticipation'],
  },
  argTypes: {
    type: {
      options: typeOptions,
      control: { label: 'firstType', type: 'select' },
    },
  },
  decorators: [
    (Story: React.FC) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CardData;

export const Basic = {};
