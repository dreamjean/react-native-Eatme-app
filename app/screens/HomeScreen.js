// import { useDrawerProgress } from "@react-navigation/drawer";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Container>
      <Text>Main Layout</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Text = styled.Text``;

export default HomeScreen;
