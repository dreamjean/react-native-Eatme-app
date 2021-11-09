import styled, { css } from "styled-components";

import { constants } from "../config";

const { width, SLIDE_IMG_HEIGHT, SLIDE_IMG_WIDTH, LOGO_WIDTH } = constants;

const avatarStyle = css`
  width: 50px;
  height: 50px;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m,
  })}
`;

const bgStyle = css`
  width: ${width}px;
  height: 100%;
`;

const boardingStyle = css`
  width: ${SLIDE_IMG_WIDTH}px;
  height: ${SLIDE_IMG_HEIGHT}px;
`;

const icon1Style = css`
  width: 24px;
  height: 24px;

  ${({ theme: { colors, space } }) => ({
    tintColor: colors.white,
    marginRight: space.s3,
  })}
`;

const icon2Style = css`
  width: 26px;
  height: 26px;

  ${({ theme: { space } }) => ({
    marginRight: space.s2,
  })}
`;

const logo1Style = css`
  width: ${LOGO_WIDTH}px;
  height: 60px;
`;

const logo2Style = css`
  width: 20px;
  height: 20px;

  ${({ theme: { space } }) => ({
    marginRight: space.s3,
  })}
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ bg }) => bg && bgStyle}
  ${({ boarding }) => boarding && boardingStyle}
  ${({ icon1 }) => icon1 && icon1Style}
  ${({ icon2 }) => icon2 && icon2Style}
  ${({ logo1 }) => logo1 && logo1Style}
  ${({ logo2 }) => logo2 && logo2Style}
`;

export default Image;
