import { HorizontalList } from '@components/HorizontalList';
import React from 'react';
import { View } from 'react-native';
import { CardProps } from '@components/Card';

type TListDataProps = {
  title: string;
  component: React.FC<any>;
  args: TArgs;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
};

type TArgs = {
  title: string;
  emptyMessage: string;
  data: CardProps[];
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
        name: 'eevee',
        type: 'grass',
        abilities: ['run away', 'adaptability', 'anticipation'],
      },
      {
        id: 3,
        name: 'firei',
        type: 'poison',
        abilities: ['run away', 'adaptability', 'anticipation'],
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
