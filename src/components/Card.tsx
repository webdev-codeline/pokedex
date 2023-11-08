// react
import React, { FC } from 'react';

// libs
import { SvgProps } from 'react-native-svg';

// helpers
import { onPressFallback } from '@/utils/callbacks.helper';
import { capitalizeFirstLetter } from '@/utils/convert.helper';
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
  ancestorId: number;
  onPressCallback?: () => void;
};

export const Card: FC<CardProps> = ({ id, name, type, abilities, onPressCallback }) => {
  const Icon: React.FC<SvgProps> = IconFiles[IconNames[type]];

  return (
    <CardContainer onPress={onPressCallback ?? onPressFallback}>
      <SpritesBack source={{ uri: typeToBackgroundUri(type) }}>
        <Sprite source={{ uri: idToSpriteUri(id) }} style={{ width: 200, height: 200 }} />
      </SpritesBack>

      <CardData>
        <CardIcon>
          <Icon width={40} height={40} />
        </CardIcon>
        <TypesWrapper>
          <TypeText color={colors[type]}>{capitalizeFirstLetter(type)}</TypeText>
        </TypesWrapper>

        <CardName>{name.toUpperCase()}</CardName>

        {abilities.map((a, index) => (
          <Abilities key={index}>{capitalizeFirstLetter(a)}</Abilities>
        ))}
      </CardData>
    </CardContainer>
  );
};
