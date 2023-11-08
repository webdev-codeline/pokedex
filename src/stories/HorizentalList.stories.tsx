import { HorizontalList } from '../components/HorizontalList';
import React from 'react';
import { View } from 'react-native';

type PokemonData = {
  id: number;
};

type TListDataProps = {
  title: string;
  component: React.FC<any>;
  args: TArgs;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
};

type TArgs = {
  title: string;
  emptyMessage: string;
  data: PokemonData[];
};

const ListData: TListDataProps = {
  title: 'ListData',
  component: HorizontalList,
  args: {
    title: 'Last Visited',
    emptyMessage: 'not visited a card yet',
    data: [
      {
        id: 2,
      },
      {
        id: 3,
      },
    ],
  },
  decorators: [
    (Story: React.FC<any>) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ListData;

export const Basic = {};

export const NoData = {
  args: {
    emptyMessage: 'No Data yet!',
    data: [],
  },
};
