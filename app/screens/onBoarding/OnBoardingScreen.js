import styled from "styled-components/native";

import { SlideHeader } from "../../components";

const OnBoardingScreen = () => {
  return (
    <Container>
      <SlideHeader />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default OnBoardingScreen;
