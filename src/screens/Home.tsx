// react
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

// libs
import { styled } from 'styled-components/native';

// components
import { CardProps } from '@/components/Card';
import { usePokemonSearchByNameLazyQuery } from '@/hooks';
import { NavigationInput } from '@/types/action';
import { toCardData } from '@/utils/convert.helper';
import { wrapIn } from '@/utils/input.helper';
import { HorizontalList } from '@components/HorizontalList';
import { SearchBar } from '@components/SearchBar';

export const Home = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState<string>();

  // TODO use error to render error compoenet
  const [searchPokemons, { loading, data }] = usePokemonSearchByNameLazyQuery();

  let mappedSearchData: CardProps[] = [];

  if (!loading && data) {
    mappedSearchData = toCardData(data);
  }

  // TODO add debounce for this request
  const onSearch = (newInput: string) => {
    setSearchText(newInput);

    searchPokemons({ variables: { name: wrapIn('%')(newInput) } });
  };

  const onCardPress = ({ id, type, ancestorId }: NavigationInput) => {
    // TODO add the id to searched list

    navigation.navigate('Details', {
      id,
      type,
      ancestorId,
    });
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
          searchText && (
            <HorizontalList
              title={`Result for: "${searchText}" `}
              data={mappedSearchData}
              onPressCallback={onCardPress}
            />
          )
        )}

        <HorizontalList title='Searched: ' data={[]} onPressCallback={() => {}} />
        <HorizontalList title='Visited: ' data={[]} onPressCallback={() => {}} />
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
