import React from 'react';
import { View } from 'react-native';
import { Card } from '../components/Card';

import { colors } from '../utils/pokemonTypeColors.helper';

import { IconFiles, IconNames } from '../utils/iconNames.helper';
import { SvgProps } from 'react-native-svg';

type TCardDataProps = {
  title: string;
  component: React.FC<any>;
  args: TArgs;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
};

type TArgs = {
  name: string;
  details: string[];
  spriteUrl: string;
  spriteBack: string;
  Icon: React.FC<SvgProps>;
  types: { name: string; textColor: string }[];
};

const CardData: TCardDataProps = {
  title: 'CardData',
  component: Card,
  args: {
    name: 'pokemon',
    details: ['detail1', 'detail2', 'detail3'],
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${'1'}.png`,
    spriteBack: `https://kai-tw.github.io/PokeCard/backgrounds/${'grass'}.png`,
    Icon: IconFiles[IconNames['grass']],
    types: [
      { name: 'grass', textColor: colors['grass'] },
      { name: 'poison', textColor: colors['poison'] },
    ],
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
