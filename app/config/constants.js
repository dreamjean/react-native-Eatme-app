import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SLIDE_HEIGHT = height * 0.58;
const SLIDE_IMG_WIDTH = width * 0.65;
const SLIDE_IMG_HEIGHT = width * 0.8;
const LOGO_WIDTH = width * 0.45;

export default {
  height,
  width,
  LOGO_WIDTH,
  SLIDE_HEIGHT,
  SLIDE_IMG_HEIGHT,
  SLIDE_IMG_WIDTH,
};
