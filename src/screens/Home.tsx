// react
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

// libs
import { styled } from 'styled-components/native';

// components
import { HorizontalList } from '@components/HorizontalList';
import { SearchBar } from '@components/SearchBar';

export const Home = () => {
  const [searchText, setSearchText] = useState<string>();

  return (
    <ScrollView>
      <HomeContainer>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        {/* todo add data lists here: */}
        {/* TODO add loading here add data lists here: */}

        {!searchText && <HorizontalList title='Searched Before' data={[]} />}
        <HorizontalList title='Visited Lately' data={[]} />
        <HorizontalList title='Fav' data={[]} />
        {searchText && <HorizontalList title='Visited' data={[]} />}
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
