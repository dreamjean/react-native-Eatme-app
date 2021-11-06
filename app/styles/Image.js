import styled, { css } from "styled-components";

import { constants } from "../config";

const { width, SLIDE_HEIGHT, LOGO_WIDTH } = constants;

const avatarStyle = css`
  width: 50px;
  height: 50px;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m,
  })}
`;

const bgStyle = css`
  width: ${width}px;
  /* height: ${SLIDE_HEIGHT}px; */
`;

const boardingStyle = css`
  width: ${width * 0.6}px;

  ${({ theme: { space } }) => ({
    marginTop: space.l2,
  })}
`;

const iconStyle = css`
  width: 24px;
  height: 24px;

  ${({ theme: { colors, space } }) => ({
    tintColor: colors.white,
    marginRight: space.s3,
  })}
`;

const logoStyle = css`
  width: ${LOGO_WIDTH}px;
  height: 60px;
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ bg }) => bg && bgStyle}
  ${({ boarding }) => boarding && boardingStyle}
  ${({ icon }) => icon && iconStyle}
  ${({ logo }) => logo && logoStyle}
`;

export default Image;
