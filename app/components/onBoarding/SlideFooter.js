import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { colors, constants } from "../../config";
import routes from "../../navigation/routes";
import { Text } from "../../styles";
import Button from "../Button";

const { SLIDE_TEXT_WIDTH } = constants;

const SlideFooter = ({
  title,
  description,
  buttonLabel,
  last,
  onSkipPress,
  onPress,
}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TextBox>
        <Text h2 center>
          {title}
        </Text>
        <Text body5 marginTop={6} center style={{ color: colors.darkGray2 }}>
          {description}
        </Text>
      </TextBox>
      {last ? (
        <Button
          title={buttonLabel}
          primary
          width={260}
          onPress={() => navigation.navigate(routes.WELCOME)}
        />
      ) : (
        <ButtonsBox>
          <Button
            title="skip"
            startColor={colors.transparent}
            endColor={colors.transparent}
            textStyle={{ color: colors.gold2 }}
            onPress={onSkipPress}
          />
          <Button title={buttonLabel} primary width={80} onPress={onPress} />
        </ButtonsBox>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.m2,
    paddingTop: 0,
  })};
`;

const TextBox = styled.View`
  flex-grow: 1;
  align-items: center;
  align-self: center;
  width: ${SLIDE_TEXT_WIDTH}px;
`;

const ButtonsBox = styled.View`
  flex-direction: row;
  width: 92%;
  align-items: center;
  justify-content: space-between;
`;

export default SlideFooter;
