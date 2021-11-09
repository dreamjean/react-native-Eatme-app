import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import styled from "styled-components";

import { PaginationDot, SlideFooter, SlideHeader } from "../../components";
import { constants, images } from "../../config";
import slides from "../../data/slides";
import routes from "../../navigation/routes";
import { Image } from "../../styles";

const { width, SLIDE_HEIGHT } = constants;

const OnBoardingScreen = ({ navigation }) => {
  const x = useSharedValue(0);
  const scroll = useRef();

  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => (x.value = contentOffset.x),
  });

  const activeIndex = useDerivedValue(() => {
    return x.value / width;
  });

  const style = useAnimatedStyle(() => {
    return {
      flex: 1,
      flexDirection: "row",
      width: width * slides.length,
      marginTop: 30,
      transform: [{ translateX: -x.value }],
    };
  });

  return (
    <Container>
      <HeaderContainer>
        <LogoBox>
          <Image logo1 source={images.logo02} />
        </LogoBox>

        <Animated.ScrollView
          ref={scroll}
          horizontal
          onScroll={handleScroll}
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        >
          {slides.map((slide, index) => (
            <SlideHeader
              key={`${slide.id}`}
              bgImage={slide.backgroundImage}
              x={x}
              index={index}
              picture={slide.bannerImage}
            />
          ))}
        </Animated.ScrollView>
      </HeaderContainer>
      <FooterContainer>
        <Dots>
          {slides.map((_, index) => (
            <PaginationDot key={`dot${index}`} {...{ index, activeIndex }} />
          ))}
        </Dots>
        <Animated.View style={style}>
          {slides.map((slide, index) => (
            <SlideFooter
              key={`s_footer${slide.id}`}
              title={slide.title}
              description={slide.description}
              buttonLabel={slide.buttonLabel}
              last={index === slides.length - 1}
              onSkipPress={() => navigation.navigate(routes.LOGIN)}
              onPress={() => {
                const lastIndex = index === slides.length - 1;
                if (lastIndex) navigation.navigate("Login");

                scroll.current.scrollTo({
                  x: width * (index + 1),
                  animated: true,
                });
              }}
            />
          ))}
        </Animated.View>
      </FooterContainer>
      <StatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const LogoBox = styled.View`
  position: absolute;
  top: 40px;
  align-self: center;
  z-index: 5;
`;

const HeaderContainer = styled.View`
  height: ${SLIDE_HEIGHT + 30}px;
`;

const FooterContainer = styled.View`
  flex: 1;
`;

const Dots = styled.View`
  flex-direction: row;
  height: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
`;

export default OnBoardingScreen;
