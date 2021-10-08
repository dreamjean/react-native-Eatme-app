import Constants from "expo-constants";
import styled from "styled-components";

const SafeAreaView = styled.SafeAreaView`
  ${({ backgroundColor, theme: { colors } }) => ({
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: backgroundColor ? backgroundColor : colors.white,
  })}
`;

export default SafeAreaView;
