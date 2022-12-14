import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  //flex-direction: row;
  //align-items: flex-start;
  align-items: center;
  justify-content: flex-start;
  //padding-top: 20px;
  background-color: ${COLORS.primaryDark};
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${COLORS.danger};
  font-family: 'Ubuntu-Bold';
`;

export const FlatList = styled.FlatList`
  /* margin-top: 20px; */
  width: 90%;
  /* height: 100%; */
`;
