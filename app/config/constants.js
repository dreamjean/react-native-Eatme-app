import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SLIDE_HEIGHT = height * 0.58;
const SLIDE_BOARDER = 360;
const SLIDE_IMG_SIZE = width * 0.75;
const SLIDE_TEXT_WIDTH = 320;
const WELCOME_FOOTER = height * 0.5;

export default {
  height,
  width,
  SLIDE_BOARDER,
  SLIDE_HEIGHT,
  SLIDE_IMG_SIZE,
  SLIDE_TEXT_WIDTH,
  WELCOME_FOOTER,
};
