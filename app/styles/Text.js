import styled, { css } from "styled-components";

const titleStyle = css`
  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[0],
    fontSize: size.xl,
  })}
`;

const h1Style = css`
  line-height: 36px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[1],
    fontSize: size.l,
  })}
`;

const h2Style = css`
  line-height: 30px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[1],
    fontSize: size.m,
  })}
`;

const h3Style = css`
  line-height: 22px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[2],
    fontSize: size.s3,
  })}
`;

const h4Style = css`
  line-height: 22px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[2],
    fontSize: size.s2,
  })}
`;

const h5Style = css`
  line-height: 22px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[2],
    fontSize: size.s1,
  })}
`;

const body1Style = css`
  line-height: 36px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[3],
    fontSize: size.l,
  })}
`;

const body2Style = css`
  line-height: 30px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[3],
    fontSize: size.m,
  })}
`;

const body3Style = css`
  line-height: 22px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[3],
    fontSize: size.s3,
  })}
`;

const body4Style = css`
  line-height: 22px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[3],
    fontSize: size.s2,
  })}
`;

const body5Style = css`
  line-height: 22px;

  ${({ theme: { fonts, size } }) => ({
    fontFamily: fonts[3],
    fontSize: size.s1,
  })}
`;

const dangerStyle = css`
  ${({ theme: { colors, fonts, size, space } }) => ({
    color: colors.red,
    fontFamily: fonts[3],
    fontSize: size.s1,
    marginBottom: space.s1,
  })}
`;

const button1Style = css`
  ${({ primary, theme: { fonts, size, colors } }) => ({
    fontFamily: fonts[2],
    fontSize: size.s2,
    color: primary ? colors.white : colors.darkBlue,
    textAlign: "center",
    textTransform: "capitalize",
  })}
`;

const button2Style = css`
  ${({ primary, theme: { fonts, size, colors } }) => ({
    fontFamily: fonts[3],
    fontSize: size.s2,
    color: primary ? colors.primary : colors.darkGray2,
    textTransform: "capitalize",
  })}
`;

const Text = styled.Text`
  ${({
    center,
    right,
    marginTop,
    marginBottom,
    white,
    light,
    opacity,
    theme: { colors },
  }) => ({
    color: white ? colors.white : light ? colors.gray : colors.darkBlue,
    textAlign: center ? "center" : right ? "right" : "left",
    marginBottom,
    marginTop,
    opacity,
  })}

  ${({ body1 }) => body1 && body1Style}
  ${({ body2 }) => body2 && body2Style}
  ${({ body3 }) => body3 && body3Style}
  ${({ body4 }) => body4 && body4Style}
  ${({ body5 }) => body5 && body5Style}
  ${({ button1 }) => button1 && button1Style}
  ${({ button2 }) => button2 && button2Style}
  ${({ danger }) => danger && dangerStyle}
  ${({ h1 }) => h1 && h1Style}
  ${({ h2 }) => h2 && h2Style}
  ${({ h3 }) => h3 && h3Style}
  ${({ h4 }) => h4 && h4Style}
  ${({ h5 }) => h5 && h5Style}
  ${({ title }) => title && titleStyle}
`;

export default Text;
