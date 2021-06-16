import styled, { css } from "styled-components";

const body1Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.m1,
  })}
`;

const body2Style = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.m2,
  })}
`;

const dangerStyle = css`
  ${({ theme: { colors, fonts, size, space } }) => ({
    color: colors.danger,
    fontFamily: fonts[1],
    fontSize: size.s1,
    marginLeft: space.m2,
  })}
`;

const buttonStyle = css`
  ${({ theme: { fonts, size, colors } }) => ({
    fontFamily: fonts[0],
    fontSize: size.m1,
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  })}
`;

const Text = styled.Text`
  ${({
    center,
    right,
    marginTop,
    marginBottom,
    white,
    secondary,
    opacity,
    theme: { colors },
  }) => ({
    color: white ? colors.white : secondary ? colors.secondary : colors.dark,
    textAlign: center ? "center" : right ? "right" : "left",
    marginBottom,
    marginTop,
    opacity,
  })}

  ${({ body1 }) => body1 && body1Style}
  ${({ body2 }) => body2 && body2Style}
  ${({ button }) => button && buttonStyle}
  ${({ danger }) => danger && dangerStyle}
`;

export default Text;
