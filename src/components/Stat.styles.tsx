import styled from 'styled-components/native';

type CirclesProps = {
  value: number;
  index: number;
  typeColor: string;
};

export const StatContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 5px;
`;

export const StatTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #222222;
  padding-left: 12px;
`;

export const StatPointsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const StatPointsCircles = styled.View<CirclesProps>`
  width: 18px;
  height: 18px;
  border-radius: 200px;
  background-color: ${(props) => (props.value >= props.index ? props.typeColor : '#a5a5a5')};
  margin: 0 3px;
`;
