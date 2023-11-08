import React, { useState } from 'react';
import styled from 'styled-components/native';

export type TStat = {
  name: string;
  value: number;
  typeColor: string;
};

type TCircles = {
  value: number;
  index: number;
  typeColor: string;
};

export const Stat = ({ name, value, typeColor }: TStat) => {
  const [circleCount, setCircleCount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <StatContainer>
      <StatTitle>
        {name === 'hp' ? name.toUpperCase() : name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ')}
      </StatTitle>
      <StatPointsWrapper>
        {circleCount.map((c) => (
          <StatPointsCircles key={c} value={value} index={c} typeColor={typeColor} />
        ))}
      </StatPointsWrapper>
    </StatContainer>
  );
};

const StatContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 5px;
`;

const StatTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #222222;
  padding-left: 12px;
`;

const StatPointsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const StatPointsCircles = styled.View<TCircles>`
  width: 18px;
  height: 18px;
  border-radius: 200px;
  background-color: ${(props) => (props.value >= props.index ? props.typeColor : '#a5a5a5')};
  margin: 0 3px;
`;
