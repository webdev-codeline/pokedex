import React from 'react';
import { View } from 'react-native';
import { Card } from '@components/Card';
import { PokemonTypes } from '@/types/color';

type TArgs = {
  id: number;
  name: string;
  type: PokemonTypes;
  abilities: string[];
};

type TArgsType = {
  options: PokemonTypes[];
  control: {
    label: string;
    type: string;
  };
};

type TCardDataProps = {
  title: string;
  component: React.FC<any>;
  args: TArgs;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
  argTypes: {
    type: TArgsType;
  };
};

const CardData: TCardDataProps = {
  title: 'CardData',
  component: Card,
  args: {
    id: 2,
    name: 'eevee',
    type: 'grass',
    abilities: ['run away', 'adaptability', 'anticipation'],
  },
  argTypes: {
    type: {
      options: [
        'grass',
        'normal',
        'fire',
        'water',
        'electric',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dragon',
        'dark',
        'steel',
        'fairy',
      ],
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
