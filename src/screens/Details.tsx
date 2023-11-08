import React from 'react';

import { ScrollView } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styled } from 'styled-components/native';
import { EvolutionIcon } from '../components/EvolutionIcon';
import { Stat } from '../components/Stat';
import { PokemonTypes, colors, toDarkKey } from '../utils/pokemonTypeColors.helper';

type TStat = {
  name: string;
  value: number;
};

type TData = {
  id: number;
  name: string;
  types: PokemonTypes[];
  abilities: string[];
  weight: number;
  height: number;
  baseStatsTotal: number;
  baseStatsText: string;
  stats: TStat[];
  evolutionIds: number[];
};

type TDetails = {
  Icon: React.FC<SvgProps>;
  typeColor: string;
  darkenTypeColor: string;
  data: TData;
};

type TStyledComponent = {
  bgcolor?: string;
  color?: string;
  borderColor?: string;
};

export const Details = ({ Icon, typeColor, darkenTypeColor, data }: TDetails) => {
  return (
    <ScrollView>
      <Container>
        {/* header starts here */}
        <Header>
          <HeaderMainBG bgcolor={typeColor}>
            <TypeIcon borderColor={darkenTypeColor}>
              <Icon width={52} height={52} />
            </TypeIcon>

            <IdContainer bgcolor={darkenTypeColor}>
              <IdNumber>{data.id}</IdNumber>
            </IdContainer>

            <TypesContainer>
              {data.types.map((type, index) => (
                <Type key={index} bgcolor={colors[toDarkKey(type)]}>
                  {type}
                </Type>
              ))}
            </TypesContainer>

            <AbilitiesContainer bgcolor={darkenTypeColor}>
              <AbilitiesTitle>Abilities</AbilitiesTitle>
              {data.abilities.map((ability, index) => (
                <Ability key={index}>{ability}</Ability>
              ))}
            </AbilitiesContainer>

            <Avatar
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id + '.png'}`,
              }}
              style={{ width: 350, height: 350 }}
            />

            <MainDetailsContainer>
              <Name>{data.name.toUpperCase()}</Name>
              <Evolution>Evolution Pokémon</Evolution>
              <PhysicalContainer>
                <PhysicalDetails>
                  <PhysicalTitle>Height</PhysicalTitle>
                  <PhysicalValue>{data.height} m</PhysicalValue>
                </PhysicalDetails>
                <PhysicalDetails>
                  <PhysicalTitle>Weight</PhysicalTitle>
                  <PhysicalValue>{data.weight} kg</PhysicalValue>
                </PhysicalDetails>
              </PhysicalContainer>
            </MainDetailsContainer>
          </HeaderMainBG>
        </Header>
        {/* header ends here */}

        <BaseContainer>
          <BaseTitleWrapper>
            <BaseTitle>Base stats total</BaseTitle>
            <BasePoint color={darkenTypeColor}>{data.baseStatsTotal}</BasePoint>
          </BaseTitleWrapper>
          <BaseText bgcolor={typeColor}>{data.baseStatsText}</BaseText>
        </BaseContainer>

        <StatsContainer>
          {data.stats.map((stat, index) => (
            <Stat key={index} value={stat.value} name={stat.name} typeColor={darkenTypeColor} />
          ))}
        </StatsContainer>

        <EvolutionContainer bgcolor={typeColor}>
          <EvolutionTitle>Evolutions</EvolutionTitle>
          <EvolutionHeadIcon>
            <EvolutionIcon pokemonId={data.id} />
          </EvolutionHeadIcon>
          <EvolutionTreeIcons>
            {data.evolutionIds.map((id, index) => (
              <EvolutionIcon pokemonId={id} key={index} />
            ))}
          </EvolutionTreeIcons>
        </EvolutionContainer>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
`;

const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin-bottom: 20px;
`;

const HeaderMainBG = styled.View<TStyledComponent>`
  position: relative;
  background-color: ${(props) => props.bgcolor ?? '#fff'};
  width: 90%;
  height: 250px;
  margin: 90px 0;
  border-radius: 40px;
`;

const TypeIcon = styled.View<TStyledComponent>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 22px;
  right: 40px;
  width: 72px;
  height: 72px;
  background: #eee;
  border: 6px solid ${(props) => props.borderColor ?? '#fff'};
  border-radius: 200px;
`;

const IdContainer = styled.View<TStyledComponent>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  right: -20px;
  width: 72px;
  height: 72px;
  background-color: ${(props) => props.bgcolor ?? '#fff'};
  border-radius: 200px;
`;

const IdNumber = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

const TypesContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  max-width: 200px;
  top: 20px;
  left: 20px;
`;

const Type = styled.Text<TStyledComponent>`
  font-size: 14px;
  margin-right: 5px;
  margin-bottom: 8px;
  padding: 2px 10px;
  background-color: ${(props) => props.bgcolor ?? '#fff'};
  border-radius: 8px;
  color: #fff;
`;

const AbilitiesContainer = styled.View<TStyledComponent>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: -150px;
  left: -10px;
  width: 120px;
  height: 200px;
  background-color: ${(props) => props.bgcolor ?? '#fff'};
  border-radius: 20px;
`;

const AbilitiesTitle = styled.Text`
  color: #fff;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
`;

const Ability = styled.Text`
  color: #dddddd;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Avatar = styled.Image`
  position: absolute;
  bottom: -110px;
  left: -110px;
`;

const MainDetailsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: -90px;
  left: 120px;
`;

const Name = styled.Text`
  color: #fff;
  font-size: 44px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Evolution = styled.Text`
  color: #1f1f1f;
  font-size: 14px;
  margin-bottom: 10px;
`;

const PhysicalContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PhysicalDetails = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 20px;
`;

const PhysicalTitle = styled.Text`
  color: #000;
  font-size: 18px;
`;

const PhysicalValue = styled.Text`
  color: #1f1f1f;
  font-size: 16px;
`;

const BaseContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 200px;
`;

const BaseTitleWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 200px;
`;

const BaseTitle = styled.Text`
  color: #1f1f1f;
  font-size: 14px;
  margin-top: 10px;
`;

const BasePoint = styled.Text<TStyledComponent>`
  color: ${(props) => props.color ?? '#000'};
  font-size: 58px;
`;

const BaseText = styled.Text<TStyledComponent>`
  font-size: 16px;
  color: #fff;
  width: 60%;
  padding: 24px 16px;
  border-radius: 24px;
  background-color: ${(props) => props.bgcolor ?? '#313131'};
`;

const StatsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
`;

const EvolutionContainer = styled.View<TStyledComponent>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 150px;
  padding: 16px;
  margin-bottom: 120px;
  border-radius: 40px;
  background-color: ${(props) => props.bgcolor ?? '#000'};
`;

const EvolutionTitle = styled.Text`
  margin-bottom: 32px;
  margin-left: 10px;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`;

const EvolutionHeadIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  bottom: -50px;
  left: 30px;
  width: 20%;
  height: 100px;
`;

const EvolutionTreeIcons = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  bottom: -150px;
  right: -30px;
  width: 75%;
  height: 200px;
`;
