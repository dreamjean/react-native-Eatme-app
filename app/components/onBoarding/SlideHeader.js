import styled from "styled-components/native";

import { images } from "../../config";
import { Image } from "../../styles";

const SlideHeader = () => {
  return (
    <Container>
      <Image bg resizeMode="stretch" source={images.background01} />
      <Heading>
        <Image logo resizeMode="contain" source={images.logo02} />
        <Image boarding source={images.favouriteFood} />
      </Heading>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Heading = styled.View`
  position: absolute;
  top: 50px;
  align-self: center;
  justify-content: center;
`;

export default SlideHeader;
