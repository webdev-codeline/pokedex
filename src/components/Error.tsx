// react
import React, { FC } from 'react';

// styles
import { ErrorBox, ErrorButton, ErrorButtonText, ErrorContainer, ErrorMessage, ErrorTitle } from './Error.styles';

export type ErrorProps = {
  errorMessage?: string;
  errorCode?: string | number;
  onTouch?: () => void;
};

export const Error: FC<ErrorProps> = ({ errorMessage, errorCode, onTouch }) => {
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
