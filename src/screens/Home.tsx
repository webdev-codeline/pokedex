import { HorizontalList } from '../components/HorizontalList';
import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import { SearchBar } from '../components/SearchBar';
import { ScrollView } from 'react-native';

export const Home = () => {
  const [searchText, setSearchText] = useState<string>();
  return (
    <ScrollView>
      <HomeContainer>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        {/* todo add data lists here: */}
        {!searchText && <HorizontalList title='Discover New' />}
        <HorizontalList title='Visited Lately' />
        <HorizontalList title='Fav' />
        {searchText && <HorizontalList title='Discover New' />}
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
