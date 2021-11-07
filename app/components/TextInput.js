import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

import { colors } from "../config";

const TextInput = ({ touched, error, icon, width = "100%", ...rest }) => {
  const dangerPrimery = error ? colors.danger : colors.secondary;
  const reColor = !touched ? colors.gray2 : dangerPrimery;

  return (
    <Wrapper {...{ error, touched, width }}>
      {icon && <MaterialIcons name={icon} color={reColor} size={24} />}
      <Input
        {...rest}
        placeholderTextColor={colors.gray2}
        selectionColor={colors.secondary}
        underlineColorAndroid={colors.transparent}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;

  ${({ width, theme: { colors, radii, space } }) => ({
    backgroundColor: colors.gray2,
    borderRadius: radii.l,
    paddingVertical: space.s3,
    paddingHorizontal: space.m,
    marginVertical: space.s3,
    width,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, fonts, space, size } }) => ({
    color: colors.medium,
    fontSize: size.body2,
    fontFamily: fonts[0],
    marginLeft: space.s2,
  })}
`;

export default TextInput;
