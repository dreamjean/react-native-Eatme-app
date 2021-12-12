import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Button } from "../../components";
import { colors, images } from "../../config";
import routes from "../../navigation/routes";
import { Image, Text } from "../../styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Image bg resizeMode="contain" source={images.welcome} />
      <Header>
        <Text h1 white center>
          Welcome To Our Food Delivery App
        </Text>
      </Header>
      <FooterContainer>
        <Button
          title="Login"
          startColor={colors.white}
          endColor={colors.white}
          marginVertical={20}
          textStyle={{ color: colors.gold2 }}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          primary
          title="Register"
          startColor={colors.gold2}
          endColor={colors.gold2}
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </FooterContainer>
      <StatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.black,
  })}
`;

const Header = styled.View`
  position: absolute;
  top: 60px;
  width: 85%;
  align-items: center;
`;

const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;

  ${({ theme: { space } }) => ({
    padding: space.l1,
  })}
`;

export default WelcomeScreen;
