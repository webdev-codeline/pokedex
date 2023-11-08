// react
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

// libs
import { SvgProps } from 'react-native-svg';

// hooks
import { usePokemonAncestorFindByIdQuery, usePokemonFindByIdQuery } from '@/hooks';
import { colors, toDarkKey } from '@utils/colors.helper';

// types
import { NavigationInput } from '@/types/action';
import { PokemonTypes } from '@/types/color';

// helpers
import { IconFiles, IconNames } from '@/utils/icons.helper';

// components
import { EvolutionIcon } from '@components/EvolutionIcon';
import { Stat } from '@components/Stat';

// styles
import { toDetailsData } from '@/utils/convert.helper';
import {
  AbilitiesContainer,
  AbilitiesTitle,
  Ability,
  Avatar,
  Container,
  Evolution,
  EvolutionContainer,
  EvolutionHeadIcon,
  EvolutionTitle,
  EvolutionTreeIcons,
  Header,
  HeaderMainBG,
  IdContainer,
  IdNumber,
  LoadingContainer,
  MainDetailsContainer,
  Name,
  PhysicalContainer,
  PhysicalDetails,
  PhysicalTitle,
  PhysicalValue,
  StatsContainer,
  Type,
  TypeIcon,
  TypesContainer,
} from './Details.styles';

export const Details = ({ route, navigation }: any) => {
  const { id, ancestorId, type }: NavigationInput = route.params;

  console.log('type in param ->', type);

  const { loading: ancestorLoading, data: ancestorData } = usePokemonAncestorFindByIdQuery({
    skip: !ancestorId,
    variables: { id: ancestorId ?? 1 },
  });

  // TODO use error to render error compoenet
  const { loading, data } = usePokemonFindByIdQuery({
    variables: { id },
  });

  let mappedData = null;
  if (!loading && data) {
    mappedData = toDetailsData(data)[0];
  }

  useEffect(() => {
    // TODO add the id to visited list
  }, []);

  const onAncestorPress = ({ id, type, ancestorId }: NavigationInput) => {
    // TODO add the id to searched list

    navigation.navigate('Details', {
      id,
      type,
      ancestorId,
    });
  };

  // FIXME schema validate and add proper mapping to avoid ? chains and defaul value
  const pokemonAncestorType: PokemonTypes =
    (ancestorData?.pokemon[0]?.types[0]?.type?.name as PokemonTypes) ?? 'normal';

  if (!mappedData) {
    return (
      <LoadingContainer>
        <ActivityIndicator size='large' color={type} />
      </LoadingContainer>
    );
  }

  const Icon: React.FC<SvgProps> = IconFiles[IconNames[type]];

  return (
    <ScrollView>
      <Container>
        {loading ? (
          <LoadingContainer>
            <ActivityIndicator size='large' color={type} />
          </LoadingContainer>
        ) : (
          <>
            <Header>
              <HeaderMainBG bgcolor={colors[toDarkKey(type)]}>
                <TypeIcon borderColor={colors[toDarkKey(type)]}>
                  <Icon width={52} height={52} />
                </TypeIcon>

                <IdContainer bgcolor={colors[toDarkKey(type)]}>
                  <IdNumber>Id: {id}</IdNumber>
                </IdContainer>

                <TypesContainer>
                  {mappedData.types.map((type, index) => (
                    <Type key={index} bgcolor={colors[toDarkKey(type)]}>
                      {type.toUpperCase()}
                    </Type>
                  ))}
                </TypesContainer>

                <AbilitiesContainer bgcolor={colors[toDarkKey(type)]}>
                  <AbilitiesTitle>Moves</AbilitiesTitle>
                  {mappedData.moves.map((ability, index) => (
                    <Ability key={index}>{ability}</Ability>
                  ))}
                </AbilitiesContainer>

                <Avatar
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + '.png'}`,
                  }}
                  style={{ width: 350, height: 350 }}
                />

                <MainDetailsContainer>
                  <Name>{mappedData.name.toUpperCase()}</Name>
                  {ancestorId && <Evolution>Evolution Pokémon</Evolution>}

                  <PhysicalContainer>
                    <PhysicalDetails>
                      <PhysicalTitle>Height</PhysicalTitle>
                      <PhysicalValue>{mappedData.height} m</PhysicalValue>
                    </PhysicalDetails>

                    <PhysicalDetails>
                      <PhysicalTitle>Weight</PhysicalTitle>
                      <PhysicalValue>{mappedData.weight} kg</PhysicalValue>
                    </PhysicalDetails>
                  </PhysicalContainer>
                </MainDetailsContainer>
              </HeaderMainBG>
            </Header>

            <StatsContainer>
              {mappedData.stats.map((stat, index) => (
                <Stat key={index} value={stat.value} name={stat.name} typeColor={toDarkKey(type)} />
              ))}
            </StatsContainer>
          </>
        )}

        {ancestorLoading ? (
          <LoadingContainer>
            <ActivityIndicator size='large' color={type} />
          </LoadingContainer>
        ) : (
          ancestorId && (
            <EvolutionContainer
              onPress={() => onAncestorPress({ id: ancestorData?.pokemon[0]?.id ?? 1, type: pokemonAncestorType })}
              bgcolor={colors[toDarkKey(pokemonAncestorType)]}
            >
              <EvolutionTitle>Evolutions</EvolutionTitle>

              {/* pokemon itself icon */}
              <EvolutionHeadIcon>
                <EvolutionIcon pokemonId={id} />
              </EvolutionHeadIcon>

              <EvolutionTreeIcons>
                {/* can be more than one */}
                <EvolutionIcon pokemonId={ancestorData?.pokemon[0]?.id ?? 1} />
                {/* <Name>{ancestorData?.pokemon[0]?.name ?? ''}</Name> */}
              </EvolutionTreeIcons>
            </EvolutionContainer>
          )
        )}
      </Container>
    </ScrollView>
  );
};
