// react
import React from 'react';
import { FlatList } from 'react-native';

// components
import { Card, CardProps } from '@components/Card';

// styles
import { ListContainer, ListEmpty, ListEmptyContainer, ListTitle } from './HorizontalList.styles';

type HorizontalListProps = {
  data: CardProps[];
  title: string;
  emptyMessage?: string;
};

export const HorizontalList = ({ data, title, emptyMessage }: HorizontalListProps) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>

      {data && data[0] ? (
        <FlatList
          horizontal
          data={data}
          renderItem={({ item: { id, abilities, name, type }, index }) => (
            <Card key={index} id={id} abilities={abilities} name={name} type={type} />
          )}
        />
      ) : (
        // TODO only show this when lenght is 0
        // FIXME in case of error or loading dont render this compoent and render a loading
        <ListEmptyContainer>
          <ListEmpty>{emptyMessage ?? 'No Data yet!'}</ListEmpty>
        </ListEmptyContainer>
      )}
    </ListContainer>
  );
};
