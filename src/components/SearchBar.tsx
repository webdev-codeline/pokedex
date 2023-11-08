// react
import React, { FC } from 'react';

// libs
import styled from 'styled-components/native';

type SearchBarProps = {
  searchText?: string;
  setSearchText: (newSearchText: string) => void;
};

export const SearchBar: FC<SearchBarProps> = ({ searchText, setSearchText }) => {
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
  width: 100%;
  height: 80px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  border: none;
  background-color: transparent;
  font-size: 14px;
  padding: 5px;
  color: #000;
  text-decoration: none;
  width: 200px;

  &:focus {
    outline: none;
    text-decoration: none;
  }

  &::placeholder {
    color: #858585;
  }
`;

const SearchUnderline = styled.View`
  width: 200px;
  height: 2px;
  border-radius: 2px;
  background-color: #000;
`;
