import { Error, ErrorProps } from '@/components/Error';
import React from 'react';
import { View } from 'react-native';

type TErrorDataProps = {
  title: string;
  component: React.FC<any>;
  args: ErrorProps;
  decorators: ((Story: React.FC<{}>) => JSX.Element)[];
};

const ErrorData: TErrorDataProps = {
  title: 'ErrorData',
  component: Error,
  args: {
    errorMessage: 'server is not responsive',
    errorCode: '502',
  },
  decorators: [
    (Story: React.FC) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ErrorData;

export const Basic = {};
