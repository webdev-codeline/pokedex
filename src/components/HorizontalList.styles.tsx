import styled from 'styled-components/native';

export const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  padding: 14px 0px 14px 10px;
  height: 340px;
  width: 100%;
  background: #e4e4e4;
  color: #333;
`;

export const ListTitle = styled.Text`
  margin-left: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const ListEmptyContainer = styled.View`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ListEmpty = styled.Text`
  font-size: 16px;
  color: #333;
`;
