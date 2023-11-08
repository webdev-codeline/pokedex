import styled from 'styled-components/native';

export const ErrorContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;

export const ErrorBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 400px;
  border-radius: 40px;
  background: #ef8d9c;
`;

export const ErrorTitle = styled.Text`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #fff;
`;

export const ErrorMessage = styled.Text`
  font-size: 16px;
  color: #1d1d1d;
`;

export const ErrorButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  background: #fff;
`;

export const ErrorButtonText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #ef8d9c;
`;
