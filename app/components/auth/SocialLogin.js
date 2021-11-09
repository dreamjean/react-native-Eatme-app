import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Image, Text } from "../../styles";

const SocialLogin = ({ fb = false, label, logo, onPress }) => {
  return (
    <Wrapper {...{ fb, onPress }}>
      <Container {...{ fb }}>
        <Image logo2 source={logo} />
        <Text button1 primary={fb}>
          {label}
        </Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(RectButton)`
  ${({ fb, theme: { radii, space } }) => ({
    borderRadius: radii.m,
    marginTop: fb ? 0 : space.s3,
  })}
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ fb, theme: { colors, space, radii } }) => ({
    backgroundColor: fb ? colors.blue : colors.white,
    borderColor: fb ? colors.blue : colors.primary,
    borderRadius: radii.m,
    borderWidth: 1,
    padding: space.s2,
    paddingLeft: space.m2,
  })}
`;

export default SocialLogin;
