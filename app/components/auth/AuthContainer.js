import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";

import { colors, icons, images } from "../../config";
import { Image, Text } from "../../styles";
import SocialLogin from "./SocialLogin";

const AuthContainer = ({ title, subTitle, otp = false, children }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutoAutomaticScrol={Platform.OS === "ios"}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <LogoBox>
          <Image logo1 source={images.logo02} />
        </LogoBox>
        <TextBox>
          <Text h2 style={{ color: colors.darkBlue }}>
            {title}
          </Text>
          <Text body4 marginTop={12} center style={{ color: colors.darkGray2 }}>
            {subTitle}
          </Text>
        </TextBox>
        <Medium>{children}</Medium>
        {otp && (
          <Social>
            <SocialLogin fb label="Contaiue with fackbook" logo={icons.fb} />
            <SocialLogin label="Contaiue with google" logo={icons.google} />
          </Social>
        )}
        <StatusBar style="dark" />
      </Container>
    </KeyboardAwareScrollView>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const LogoBox = styled.View`
  align-self: center;

  ${({ theme: { space } }) => ({
    marginTop: space.l1,
  })}
`;

const TextBox = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const Medium = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

const Social = styled.View`
  ${({ theme: { space } }) => ({
    padding: space.m1,
    paddingTop: 0,
  })}
`;

export default AuthContainer;
