import React from 'react';
import { View } from 'react-native';
import { Card } from '../components/Card';

import { colors } from '../utils/pokemonTypeColors.helper';

import { IconFiles, IconNames } from '../utils/iconNames.helper';

const CardData = {
  title: 'CardData',
  component: Card,
  args: {
    name: 'pokemon',
    details: ['detail1', 'detail2', 'detail3'],
    // todo add pokemon id to below url
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${'1'}.png`,
    // todo add pokemon first type name to these 4 below
    spriteBack: `https://kai-tw.github.io/PokeCard/backgrounds/${'grass'}.png`,
    Icon: IconFiles[IconNames['grass']],
    types: [
      { name: 'grass', textColor: colors['grass'] },
      { name: 'poison', textColor: colors['poison'] },
    ],
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CardData;

export const Basic = {};
