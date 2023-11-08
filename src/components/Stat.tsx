// react
import React, { FC } from 'react';

// helpers
import { statNameToTile } from '@utils/convert.helper';

// styles
import { StatContainer, StatPointsCircles, StatPointsWrapper, StatTitle } from './Stat.styles';

export type StatProps = {
  name: string;
  value: number;
  typeColor: string;
};

export const Stat: FC<StatProps> = ({ name, value, typeColor }) => {
  return (
    <StatContainer>
      <StatTitle>{statNameToTile(name)}</StatTitle>

      <StatPointsWrapper>
        {Array(6)
          .fill(0)
          .map((c) => (
            <StatPointsCircles key={c} value={value} index={c} typeColor={typeColor} />
          ))}
      </StatPointsWrapper>
    </StatContainer>
  );
};
