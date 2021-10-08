import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 50px;
  height: 50px;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m,
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

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ icon }) => icon && iconStyle}
`;

export default Image;
