import { Pressable } from "react-native";
import styled from "styled-components";

import { Text } from "../../styles";

const TextButton = ({ caption, title, onPress, margin }) => {
  return (
    <Wrapper {...{ margin }}>
      <Text button2 light>
        {caption}
      </Text>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        {...{ onPress }}
      >
        <Title button1>{title}</Title>
      </Pressable>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ margin, theme: { space } }) => ({
    margin: margin ? margin : space.s3,
  })}
`;

const Title = styled(Text)`
  ${({ theme: { colors } }) => ({
    color: colors.primary,
  })}
`;

export default TextButton;
