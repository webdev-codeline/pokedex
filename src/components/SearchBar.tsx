// react
import React, { FC } from 'react';

// libs
import styled from 'styled-components/native';

type SearchBarProps = {
  searchText?: string;
  onChangeTextCallback: (newSearchText: string) => void;
};

export const SearchBar: FC<SearchBarProps> = ({ searchText, onChangeTextCallback: setSearchText }) => {
  return (
    <SearchBarContainer>
      <SearchInput
        placeholder={'Search for a pokemon...'}
        value={searchText}
        onChangeText={(newSearchText) => setSearchText(newSearchText)}
      />
      <SearchUnderline />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.View`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  background-color: transparent;
  font-size: 14px;
  padding: 5px;
  color: #000;
  text-decoration: none;
  width: 200px;
`;

const SearchUnderline = styled.View`
  width: 200px;
  height: 2px;
  border-radius: 2px;
  background-color: #000;
`;
