import {
  colors,
  radius,
  fontSize,
  fontFamily,
} from "../Components/Constants/index";
const DEFAULT_LIGHT_COLOR_THEME = {
  purplePink: colors.PurplePizzazz,
  robinDarkBlue: colors.RobinEggBlue,
  robinBlue: colors.FluorescentBlue,
  robinBlueLight: colors.Turquoise,
  pink: colors.RosePink,
  white: colors.White,
  lightGray: colors.MistyRose,
  black: colors.black,
  ElectricBlue: colors.ElectricBlue,
  green: colors.green,
  red: colors.red,
  gray: colors.gray,
  MediumBlue: colors.MediumBlue,
  purple:colors.purple
};
const FONT_FAMILY = {
  regular: fontFamily.regular,
  bold: fontFamily.bold,
  medium: fontFamily.medium,
  semiBold: fontFamily.semiBold,
};
const FONT_SIZE = {
  xSmall: fontSize.extraSmall,
  avgSmall: fontSize.avgSmall,
  regSmall: fontSize.regSmall,
  small: fontSize.small,
  statusSize: fontSize.statusSize,
  medium: fontSize.medium,
  large: fontSize.large,
  mLarge: fontSize.mediumLarge,
  xLarge: fontSize.extraLarge,
  max: fontSize.superLarge,
  xxLarge: fontSize.doubleXLarge,
};

const BORDER_RADIUS = {
  radius1: radius.radius1, //5
  radius2: radius.radius2, //10
  radius3: radius.radius3, //15
  radius4: radius.radius4, //20
  radius5: radius.radius5, //90
};
export const DEFAULT_LIGHT_THEME_ID = "default-light";

export const DEFAULT_LIGHT_THEME = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  family: FONT_FAMILY,
  radius: BORDER_RADIUS,
  size: FONT_SIZE,
};
