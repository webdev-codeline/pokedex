import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin: 24px 10px;
  border-radius: 16px;
  width: 350px;
  height: 220px;
  background: #fff;
  /* Shadow properties for Android */
  elevation: 3;

  /* Shadow properties for iOS */
  shadow-offset: 0px 2px;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-radius: 4px;

  overflow: hidden;
  color: #333;
`;

export const SpritesBack = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Sprite = styled.Image``;

export const CardData = styled.View`
  flex: 1;
  position: relative;
  padding: 24px 32px;
  text-align: right;
  height: 100%;
  background: rgb(255, 255, 255, 0.9);
`;

export const CardIcon = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 16px;
  left: -32px;
  border: 6px solid #fff;
  border-radius: 200px;
  width: 58px;
  height: 58px;
  background: #eee;
`;

export const TypesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  text-transform: capitalize;
`;

export const TypeText = styled.Text<{ color: string }>`
  font-size: 27px;
  font-weight: bold;
  margin-left: 2px;
  color: ${({ color }) => color};
`;

export const CardName = styled.Text`
  margin-top: 8px;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  color: #303030;
`;

export const Abilities = styled.Text`
  margin-top: 12px;
  text-align: right;
  font-size: 16px;
  color: #303030;
`;
