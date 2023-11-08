// react
import React from 'react';

// libs
import styled from 'styled-components/native';

// helpers
import { idToSpriteUri } from '@utils/icons.helper';

type EvolutionIconProps = {
  pokemonId: number;
};

export const EvolutionIcon = ({ pokemonId }: EvolutionIconProps) => {
  return (
    <IconWrapper>
      <IconContent
        source={{
          uri: idToSpriteUri(pokemonId),
        }}
        style={{
          width: 62,
          height: 62,
        }}
      />
    </IconWrapper>
  );
};

const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 16px;
  left: -32px;
  border: 6px solid #fff;
  border-radius: 200px;
  width: 72px;
  height: 72px;
  background: #eee;
  margin: 1px;
`;

const IconContent = styled.Image``;
