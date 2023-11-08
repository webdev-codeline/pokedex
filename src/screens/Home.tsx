// react
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

// libs
import { styled } from 'styled-components/native';

// components
import { CardProps } from '@/components/Card';
import { usePokemonSearchByIdsLazyQuery, usePokemonSearchByNameLazyQuery } from '@/hooks';
import { addHistory } from '@/redux/historySlice';
import { RootState } from '@/redux/store';
import { NavigationInput } from '@/types/action';
import { toCardData } from '@/utils/convert.helper';
import { wrapIn } from '@/utils/input.helper';
import { HorizontalList } from '@components/HorizontalList';
import { SearchBar } from '@components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';

export const Home = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState<string>();

  const visits = useSelector((state: RootState) => state.visit).visits;
  const histories = useSelector((state: RootState) => state.history).histories;
  const dispatch = useDispatch();

  // TODO use error to render error compoenet
  const [searchPokemons, { loading, data }] = usePokemonSearchByNameLazyQuery();

  const [findVisitsByIds, { loading: visitLoading, data: visitData }] = usePokemonSearchByIdsLazyQuery();
  const [findHistoriesByIds, { loading: historyLoading, data: historyData }] = usePokemonSearchByIdsLazyQuery();

  let mappedSearchData: CardProps[] = [];
  let mappedHistoriesData: CardProps[] = [];
  let mappedVisitData: CardProps[] = [];

  if (!loading && data) {
    mappedSearchData = toCardData(data);
  }

  if (!visitLoading && visitData) {
    mappedVisitData = toCardData(visitData);
  }

  if (!historyLoading && historyData) {
    mappedHistoriesData = toCardData(historyData);
  }

  // TODO add debounce for this request
  const onSearch = (newInput: string) => {
    setSearchText(newInput);

    searchPokemons({ variables: { name: wrapIn('%')(newInput) } });
  };

  const onCardPress = ({ id, type, ancestorId }: NavigationInput) => {
    dispatch(addHistory({ entry: id }));

    navigation.navigate('Details', {
      id,
      type,
      ancestorId,
    });
  };

  useEffect(() => {
    findVisitsByIds({ variables: { ids: visits } });
  }, [visits]);

  useEffect(() => {
    findHistoriesByIds({ variables: { ids: histories } });
  }, [histories]);

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

        {historyLoading ? (
          <LoadingContainer>
            <ActivityIndicator size='large' color={'#000'} />
          </LoadingContainer>
        ) : (
          <HorizontalList title='Searched: ' data={mappedHistoriesData} onPressCallback={onCardPress} />
        )}

        {visitLoading ? (
          <LoadingContainer>
            <ActivityIndicator size='large' color={'#000'} />
          </LoadingContainer>
        ) : (
          <HorizontalList title='Visited: ' data={mappedVisitData} onPressCallback={onCardPress} />
        )}
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
