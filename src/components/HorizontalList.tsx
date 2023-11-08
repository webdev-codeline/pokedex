import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Card, TCard } from './Card';

type TList = {
  data?: TCard[];
  title: string;
  emptyMessage?: string;
};

export const HorizontalList = ({ data, title, emptyMessage }: TList) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      {data && data[0] ? (
        <FlatList
          horizontal
          data={data}
          renderItem={({ item, index }) => (
            <Card
              key={index}
              Icon={item.Icon}
              details={item.details}
              name={item.name}
              spriteBack={item.spriteBack}
              spriteUrl={item.spriteUrl}
              types={item.types}
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

const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  padding: 14px 0px 14px 10px;
  height: 340px;
  width: 100%;
  background: #e4e4e4;
  color: #333;
`;

const ListTitle = styled.Text`
  margin-left: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const ListEmptyContainer = styled.View`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ListEmpty = styled.Text`
  font-size: 16px;
  color: #333;
`;
