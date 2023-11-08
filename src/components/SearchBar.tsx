// react
import React from 'react';

// libs
import styled from 'styled-components/native';

type SearchBarProps = {
  searchText?: string;
  setSearchText: (newSearchText: string) => void;
};

export const SearchBar = ({ searchText, setSearchText }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchInput
        placeholder={'Search for a pokemon...'}
        value={searchText}
        onChangeText={(newSearchText) => setSearchText(newSearchText)}
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.View`
  width: 100%;
  height: 80px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  border: none;
  background-color: transparent;
  font-size: 14px;
  padding: 10px;
  color: #000;
  text-decoration: none;

  &:focus {
    outline: none;
    text-decoration: none;
  }

  &::placeholder {
    color: #858585;
  }
`;
