import styled from 'styled-components/native';

type StyleInput = {
  bgcolor?: string;
  color?: string;
  borderColor?: string;
};

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin-bottom: 20px;
`;

export const HeaderMainBG = styled.View<StyleInput>`
  position: relative;
  background-color: ${(props) => props.bgcolor ?? '#fff'};
  width: 90%;
  height: 250px;
  margin: 90px 0;
  border-radius: 40px;
`;

export const TypeIcon = styled.View<StyleInput>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 22px;
  right: 40px;
  width: 72px;
  height: 72px;
  background: #eee;
  border: 6px solid ${(props) => props.borderColor ?? '#fff'};
  border-radius: 200px;
`;

export const IdContainer = styled.View<StyleInput>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  right: -20px;
  width: 72px;
  height: 72px;
  background-color: ${(props) => props.bgcolor ?? '#fff'};
  border-radius: 200px;
`;

export const IdNumber = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

export const TypesContainer = styled.View<{ length: number }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  max-width: 200px;
  top: 10px;
  left: ${({ length }) => (length > 1 ? '15px' : '5px')};
`;

export const Type = styled.Text<StyleInput>`
  font-size: 14px;
  margin-right: 5px;
  margin-bottom: 8px;
  padding: 2px 10px;
  background-color: ${(props) => props.bgcolor ?? '#fff'};
  border-radius: 8px;
  color: #fff;
`;

export const AbilitiesContainer = styled.View<StyleInput>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: -150px;
  left: 0px;
  width: 120px;
  height: 200px;
  background-color: ${(props) => props.bgcolor ?? '#fff'};
  border-radius: 20px;
`;

export const AbilitiesTitle = styled.Text`
  color: #fff;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
`;

export const Ability = styled.Text`
  color: #dddddd;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Avatar = styled.Image`
  position: absolute;
  bottom: -50px;
  left: 0px;
`;

export const MainDetailsContainer = styled.View<{ ancestorId: number | null }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: ${({ ancestorId }) => (ancestorId === null ? '-110px' : '-140px')};
  left: 150px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const Evolution = styled.Text`
  color: #1f1f1f;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const PhysicalContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PhysicalDetails = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 20px;
`;

export const PhysicalTitle = styled.Text`
  color: #000;
  font-size: 18px;
`;

export const PhysicalValue = styled.Text`
  color: #1f1f1f;
  font-size: 16px;
`;

export const BaseContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 200px;
`;

export const BaseTitleWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 200px;
`;

export const BaseTitle = styled.Text`
  color: #1f1f1f;
  font-size: 14px;
  margin-top: 10px;
`;

export const BasePoint = styled.Text<StyleInput>`
  color: ${(props) => props.color ?? '#000'};
  font-size: 58px;
`;

export const BaseText = styled.Text<StyleInput>`
  font-size: 16px;
  color: #fff;
  width: 60%;
  padding: 24px 16px;
  border-radius: 24px;
  background-color: ${(props) => props.bgcolor ?? '#313131'};
`;

export const StatsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  margin-top: 50px;
`;

export const EvolutionContainer = styled.TouchableOpacity<StyleInput>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 150px;
  padding: 16px;
  margin-bottom: 120px;
  border-radius: 40px;
  background-color: ${(props) => props.bgcolor ?? '#000'};
`;

export const EvolutionTitle = styled.Text`
  margin-bottom: 32px;
  margin-left: 10px;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
`;

export const EvolutionHeadIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  bottom: -50px;
  left: 30px;
  width: 20%;
  height: 100px;
`;

export const EvolutionTreeIcons = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  bottom: -150px;
  right: -30px;
  width: 75%;
  height: 200px;
`;

export const LoadingContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;
