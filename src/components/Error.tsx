import React from 'react';
import styled from 'styled-components/native';

export type ErrorProps = {
  errorMessage?: string;
  errorCode?: string | number;
  onTouch?: () => void;
};

export const Error = ({ errorMessage, errorCode, onTouch }: ErrorProps) => {
  return (
    <ErrorContainer>
      <ErrorBox>
        <ErrorTitle>{errorCode ? 'ERROR ' + errorCode + ' !' : 'ERROR!'}</ErrorTitle>
        <ErrorMessage>{errorMessage ? errorMessage.toUpperCase() : 'OH NO, SOMETHING WENT WRONG.'}</ErrorMessage>
        <ErrorButton onPress={onTouch}>
          <ErrorButtonText>TRY AGAIN</ErrorButtonText>
        </ErrorButton>
      </ErrorBox>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;

const ErrorBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 400px;
  border-radius: 40px;
  background: #ef8d9c;
`;

const ErrorTitle = styled.Text`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #fff;
`;

const ErrorMessage = styled.Text`
  font-size: 16px;
  color: #1d1d1d;
`;

const ErrorButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  background: #fff;
`;

const ErrorButtonText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #ef8d9c;
`;
