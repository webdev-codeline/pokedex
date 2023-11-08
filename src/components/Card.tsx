// react
import React from 'react';

// libs
import { SvgProps } from 'react-native-svg';

// helpers
import { colors } from '@utils/colors.helper';
import { IconFiles, IconNames, idToSpriteUri, typeToBackgroundUri } from '@utils/icons.helper';

// types
import { PokemonTypes } from '@/types/color';

// styles
import {
  Abilities,
  CardContainer,
  CardData,
  CardIcon,
  CardName,
  Sprite,
  SpritesBack,
  TypeText,
  TypesWrapper,
} from './Card.styles';

export type CardProps = {
  id: number;
  name: string;
  type: PokemonTypes;
  abilities: string[];
};

// FIXME remove this after API integration
export const cardDefaultValues = {
  id: 1,
  name: 'eevee',
  type: 'grass' as PokemonTypes,
  abilities: ['run away', 'adaptability', 'anticipation'],
};

export const Card = (props: CardProps) => {
  // export const Card = ({ id, name, types, abilities }: CardProps) => {
  // todo remove initial data, this is for test
  const { id, name, type, abilities } = props || cardDefaultValues;

  const Icon: React.FC<SvgProps> = IconFiles[IconNames[type]];

  return (
    <CardContainer>
      <SpritesBack source={{ uri: typeToBackgroundUri(type) }}>
        <Sprite source={{ uri: idToSpriteUri(id) }} style={{ width: 200, height: 200 }} />
      </SpritesBack>

      <CardData>
        <CardIcon>
          <Icon width={40} height={40} />
        </CardIcon>
        <TypesWrapper>
          <TypeText color={colors[type]}>{type}</TypeText>
        </TypesWrapper>

        <CardName>{name.toUpperCase()}</CardName>

        {abilities.map((a, index) => (
          <Abilities key={index}>{a}</Abilities>
        ))}
      </CardData>
    </CardContainer>
  );
};
