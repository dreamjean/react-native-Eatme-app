import { StyleSheet } from "react-native";
import styled, { css } from "styled-components";

const seperatorStyle = css`
  height: ${StyleSheet.hairlineWidth}px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.lightGray1,
    margin: space.s2,
  })}
`;

const View = styled.View`
  ${({ seperator }) => seperator && seperatorStyle}
`;

export default View;
