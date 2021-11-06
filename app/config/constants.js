import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SLIDE_HEIGHT = height * 0.55;
const LOGO_WIDTH = width * 0.5;

export default {
  height,
  width,
  LOGO_WIDTH,
  SLIDE_HEIGHT,
};
