// react
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

// libs
import { styled } from 'styled-components/native';

// components
import { HorizontalList } from '@components/HorizontalList';
import { SearchBar } from '@components/SearchBar';

export const Home = () => {
  const [searchText, setSearchText] = useState<string>();

  const [loading, setLoading] = useState(true);

  setInterval(() => {
    setLoading(false);
  }, 3000);

  return (
    <ScrollView>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size='large' color={'#000'} />
        </LoadingContainer>
      ) : (
        <HomeContainer>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          {/* todo add data lists here: */}
          {/* TODO add loading here add data lists here: */}

          {!searchText && <HorizontalList title='Searched Before' data={[]} />}
          <HorizontalList title='Visited Lately' data={[]} />
          <HorizontalList title='Fav' data={[]} />
          {searchText && <HorizontalList title='Visited' data={[]} />}
        </HomeContainer>
      )}
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
