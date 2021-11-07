import styled from "styled-components";

const Icon = ({
  backgroundColor,
  borderColor,
  color,
  IconComponent,
  icon,
  iconRatio = 1,
  image,
  round = false,
  size,
  tintColor,
}) => {
  return (
    <Container {...{ backgroundColor, borderColor, round, size }}>
      {icon && (
        <IconComponent name={icon} size={iconRatio * size} color={color} />
      )}
      {image && <Image source={image} {...{ tintColor, iconRatio, size }} />}
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ backgroundColor, round, borderColor, size, theme: { radii } }) => ({
    backgroundColor,
    borderColor,
    borderWidth: borderColor ? 1 : 0,
    borderRadius: round ? size / 2 : radii.m,
    height: size,
    width: size,
  })}
`;

const Image = styled.Image`
  ${({ tintColor, iconRatio, size }) => ({
    width: size * iconRatio,
    height: size * iconRatio,
    tintColor,
  })}
`;

export default Icon;
