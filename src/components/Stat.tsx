// react
import React, { FC } from 'react';

// helpers
import { statNameToTile } from '@utils/convert.helper';

// styles
import { DarkenPokemonTypes } from '@/types/color';
import { colors } from '@/utils/colors.helper';
import { StatContainer, StatPointsCircles, StatPointsWrapper, StatTitle } from './Stat.styles';

export type StatProps = {
  name: string;
  value: number;
  typeColor: DarkenPokemonTypes;
};

export const Stat: FC<StatProps> = ({ name, value, typeColor }) => {
  return (
    <StatContainer>
      <StatTitle>{statNameToTile(name)}</StatTitle>

      <StatPointsWrapper>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <StatPointsCircles
              key={index}
              value={Math.floor(value / 16.666)}
              index={index}
              typeColor={colors[typeColor]}
            />
          ))}
      </StatPointsWrapper>
    </StatContainer>
  );
};
