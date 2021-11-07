import styled from "styled-components/native";

import { colors } from "../../config";
import { Text } from "../../styles";
import Button from "../Button";

const SlideFooter = ({
  title,
  description,
  buttonLabel,
  last,
  onSkipPress,
  onPress,
}) => {
  return (
    <Container>
      <TextBox>
        <Text h2>{title}</Text>
        <Text body4 marginTop={12} center style={{ color: colors.darkGray2 }}>
          {description}
        </Text>
      </TextBox>
      {last ? (
        <Button title={buttonLabel} primary width={"100%"} />
      ) : (
        <ButtonsBox>
          <Button
            title="skip"
            bgColor={colors.transparent}
            textStyle={{ color: colors.darkGray2 }}
            onPress={onSkipPress}
          />
          <Button title={buttonLabel} primary width={160} onPress={onPress} />
        </ButtonsBox>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

const TextBox = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingBottom: space.s3,
    marginBottom: space.l2,
  })}
`;

const ButtonsBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default SlideFooter;
