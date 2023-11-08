import React from 'react';
import { View } from 'react-native';
import { Card } from '../components/Card';

type TCardDataProps = {
  title: string;
  component: React.FC<any>;
  args: TArgs;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
};

type TArgs = {
  id: number;
};

const CardData: TCardDataProps = {
  title: 'CardData',
  component: Card,
  args: {
    id: 2,
  },
  decorators: [
    (Story: React.FC) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CardData;

export const Basic = {};
