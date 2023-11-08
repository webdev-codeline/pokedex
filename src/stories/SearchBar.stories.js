import { SearchBar } from '../components/SearchBar';
import React from 'react';
import { View } from 'react-native';

const SearchData = {
  title: 'Search',
  component: SearchBar,
  args: {
    searchText: 'Search for a pokemon...',
    setSearchText: (searchText: string) => {},
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default SearchData;

export const Basic = {};
