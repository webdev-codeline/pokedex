// react
import React, { FC } from 'react';
import { View } from 'react-native';

// components
import { CardProps } from '@components/Card';
import { HorizontalList, HorizontalListProps } from '@components/HorizontalList';

type ListDataProps = {
  title: string;
  component: FC<HorizontalListProps>;
  args: Args;
  decorators: ((Story: FC<{}>) => JSX.Element)[];
};

type Args = {
  title: string;
  emptyMessage: string;
  data: CardProps[];
};

const ListData: ListDataProps = {
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
        ancestorId: 1,
      },
      {
        id: 3,
        name: 'firei',
        type: 'poison',
        abilities: ['run away', 'adaptability', 'anticipation'],
        ancestorId: 1,
      },
    ],
  },
  decorators: [
    (Story: FC<{}>) => (
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
