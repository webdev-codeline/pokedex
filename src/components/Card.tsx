import React from 'react';
import styled from 'styled-components/native';
import { SvgProps } from 'react-native-svg';
import { colors } from '../utils/pokemonTypeColors.helper';
import { IconFiles, IconNames } from '../utils/iconNames.helper';

type TText = {
  color: string;
};

export type TCard = {
  id: number;
};

export const Card = ({ id }: TCard) => {
  // todo change this to api call or zustand|redux call
  const data = {
    id,
    name: 'eevee',
    types: ['grass', 'poison'],
    abilities: ['run away', 'adaptability', 'anticipation'],
  };

  const Icon: React.FC<SvgProps> = IconFiles[IconNames[data.types[0]]];

  return (
    <CardContainer>
      <SpritesBack source={{ uri: `https://kai-tw.github.io/PokeCard/backgrounds/${data.types[0]}.png` }}>
        <Sprite
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png` }}
          style={{ width: 200, height: 200 }}
        />
      </SpritesBack>
      <CardData>
        <CardIcon>
          <Icon width={40} height={40} />
        </CardIcon>
        <TypesWrapper>
          {data.types.map((t, index) => (
            <Type color={colors[t]} key={index}>
              {t}
            </Type>
          ))}
        </TypesWrapper>
        <CardName>{data.name}</CardName>
        {data.abilities.map((a, index) => (
          <Abilities key={index}>{a}</Abilities>
        ))}
      </CardData>
    </CardContainer>
  );
};

const CardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin: 24px 10px;
  border-radius: 16px;
  width: 350px;
  height: 220px;
  background: #fff;
  box-shadow: 0 16px 40px rgba(34, 35, 58, 0.25);
  overflow: hidden;
  color: #333;
`;

const SpritesBack = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Sprite = styled.Image``;

const CardData = styled.View`
  flex: 1;
  position: relative;
  padding: 24px 32px;
  text-align: right;
  height: 100%;
  background: rgb(255, 255, 255, 0.9);
`;

const CardIcon = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 16px;
  left: -32px;
  border: 6px solid #fff;
  border-radius: 200px;
  width: 58px;
  height: 58px;
  background: #eee;
`;

const TypesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  text-transform: capitalize;
`;

const Type = styled.Text<TText>`
  font-size: 14px;
  margin-left: 8px;
  color: ${(props) => props.color};
`;

const CardName = styled.Text`
  margin-top: 8px;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  color: #303030;
`;

const Abilities = styled.Text`
  margin-top: 12px;
  text-align: right;
  font-size: 16px;
  color: #303030;
`;
