import React from "react";
import styled from "styled-components";

const Icon = ({
  backgroundColor,
  borderColor,
  color,
  IconComponent,
  icon,
  iconRatio = 0.7,
  image,
  size,
  tintColor,
}) => {
  return (
    <Container {...{ backgroundColor, borderColor, size }}>
      {icon && (
        <IconComponent name={icon} size={iconRatio * size} color={color} />
      )}
      {image && <Image source={image} {...{ tintColor }} />}
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;

  ${({ backgroundColor, borderColor, size }) => ({
    backgroundColor,
    borderColor,
    borderWidth: borderColor ? 1 : 0,
    borderRadius: size / 2,
    height: size,
    width: size,
  })}
`;

const Image = styled.Image`
  ${({ tintColor }) => ({
    width: "100%",
    height: "100%",
    tintColor,
  })}
`;

export default Icon;
