// react
import React, { FC } from 'react';
import { FlatList } from 'react-native';

// components
import { Card, CardProps } from '@components/Card';

// types
import { NavigationInput } from '@/types/action';

// styles
import { ListContainer, ListEmpty, ListEmptyContainer, ListTitle } from './HorizontalList.styles';

export type HorizontalListProps = {
  data: CardProps[];
  title: string;
  emptyMessage?: string;
  onPressCallback: (input: NavigationInput) => void;
};

export const HorizontalList: FC<HorizontalListProps> = ({ data, title, emptyMessage, onPressCallback }) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>

      {data && data.length && data[0] ? (
        <FlatList
          horizontal
          data={data}
          renderItem={({ item: { id, ancestorId, abilities, name, type }, index }) => (
            <Card
              key={index}
              id={id}
              abilities={abilities}
              name={name}
              type={type}
              ancestorId={ancestorId}
              onPressCallback={() => {
                console.log({ id, type, ancestorId });
                onPressCallback({ id, type, ancestorId });
              }}
            />
          )}
        />
      ) : (
        <ListEmptyContainer>
          <ListEmpty>{emptyMessage ?? 'No Data yet!'}</ListEmpty>
        </ListEmptyContainer>
      )}
    </ListContainer>
  );
};
