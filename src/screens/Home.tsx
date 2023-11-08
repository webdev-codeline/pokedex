// react
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

// libs
import { styled } from 'styled-components/native';

// components
import { CardProps } from '@/components/Card';
import { usePokemonSearchByNameLazyQuery } from '@/hooks';
import { wrapIn } from '@/utils/input.helper';
import { HorizontalList } from '@components/HorizontalList';
import { SearchBar } from '@components/SearchBar';

export const Home = () => {
  const [searchText, setSearchText] = useState<string>();

  // TODO use error to render error compoenet
  const [searchPokemons, { loading, error, data }] = usePokemonSearchByNameLazyQuery();

  let mappedSearchData: CardProps[] = [];

  if (!loading && data) {
    mappedSearchData = data.pokemons.map(({ id, abilities, types, name }) => {
      // TODO validate the result via zod
      // TODO remove the default value and throw error incase of invalid data
      return {
        id,
        abilities: abilities.map(({ ability }) => ability?.name),
        name,
        type: types[0]?.type?.name || 'normal',
      } as CardProps;
    });
  }

  // TODO add debounce for this request
  const onSearch = (newInput: string) => {
    setSearchText(newInput);

    searchPokemons({ variables: { name: wrapIn('%')(newInput) } });
  };

  return (
    <ScrollView>
      <HomeContainer>
        <SearchBar searchText={searchText} onChangeTextCallback={onSearch} />

        {loading ? (
          <LoadingContainer>
            <ActivityIndicator size='large' color={'#000'} />
          </LoadingContainer>
        ) : (
          searchText && <HorizontalList title={`Result for: "${searchText}" `} data={mappedSearchData} />
        )}

        <HorizontalList title='Searched: ' data={[]} />
        <HorizontalList title='Visited: ' data={[]} />
      </HomeContainer>
    </ScrollView>
  );
};

const HomeContainer = styled.View`
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e4e4e4;
`;

const LoadingContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;
