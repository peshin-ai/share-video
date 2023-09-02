export const color = {
  black: "#000000",
  white: "#ffffff",
  textSecondary: "#8d99ae", // 5%
  textPrimary: "#d90429", // 87%
  primary: {
    main: "#d90429",
    dark: "#ef233c",
    light: "#d90429",
    50: "rgba(71, 76, 170, 0.5)", // 50%
    20: "rgba(71, 76, 170, 0.2)", // 20%
    8: "#474CAA14",
  },
  secondary: {
    main: "#2b2d42",
    dark: "#8d99ae",
    light: "#2b2d42",
    50: "rgba(254, 95, 91, 0.5)", // 50%
    8: "rgba(255, 146, 136, 0.08)",
  },
  success: {
    main: "#00D869",
    dark: "#00A53B",
    light: "#46F282",
    lightBg: "rgba(0, 216, 105, 0.1)",
    contrastText: "#00562A",
  },
  warning: {
    main: "#FBBC0E",
    dark: "#E1A200",
    light: "#FFD254",
    lightBg: "rgba(251, 188, 14, 0.1)",
    contrastText: "#333333",
  },
  error: {
    main: "#F44336",
    dark: "#E31B0C",
    light: "#F88078",
    lightBg: "rgba(244, 67, 54, 0.1)",
    contrastText: "#ffffff",
  },
  info: {
    main: "#AAAEF3",
    dark: "#797FC0",
    light: "#DDE0FF",
    lightBg: "rgba(170, 174, 243, 0.1)",
    contrastText: "#444661",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#F9F9F9",
    300: "#e6e6e6",
    400: "#cccccc",
    500: "#b3b3b3",
    600: "#979797",
    700: "#646464",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
};

export const themeColor = {
  primary: color.primary.main,
  secondary: color.secondary.main,
  textPrimary: color.textPrimary,
  textSecondary: color.textSecondary,
};

export const colorRGB = {
  primary: "0, 36, 122",
  secondary: "254, 95, 91",
  white: "255, 255, 255",
  black: "0, 0, 0",
};

export const typography = {
  fontSize: 14,
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  fontFamily: [
    '"PT Sans"',
    '"Helvetica Neue"',
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  button: {
    fontWeight: 700,
    letterSpacing: 0.4,
    lineHeight: "24px",
  },
  body1: {
    fontSize: "1em",
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: themeColor.textPrimary,
  },
  body2: {
    fontSize: "0.83em",
    lineHeight: 1.43,
    letterSpacing: 0.15,
    color: themeColor.textPrimary,
  },
  caption: {
    fontSize: "1.2rem",
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: 0.4,
    color: themeColor.textPrimary,
  },
  h1: {
    fontSize: "2em",
    lineHeight: 1.3,
    fontWeight: 700,
    color: themeColor.textPrimary,
  },
  h2: {
    fontSize: "1.5em",
    lineHeight: 1.3,
    fontWeight: 700,
    color: themeColor.textPrimary,
  },
  h3: {
    fontSize: "1.17em",
    lineHeight: 1.3,
    fontWeight: 700,
    letterSpacing: 0.17,
    color: themeColor.textPrimary,
  },
  h4: {
    fontSize: "1em",
    lineHeight: 1.3,
    letterSpacing: 0.25,
    fontWeight: 400,
    color: themeColor.textPrimary,
  },
  h5: {
    fontSize: ".83em",
    lineHeight: 1.33,
    fontWeight: 400,
    color: themeColor.textPrimary,
  },
  h6: {
    fontSize: ".67em",
    lineHeight: 1.6,
    fontWeight: 700,
    letterSpacing: 0.15,
    color: themeColor.textPrimary,
  },
  subtitle1: {
    fontSize: ".83em",
    lineHeight: 1.3,
    fontWeight: 700,
    letterSpacing: 0.1,
    color: themeColor.textPrimary,
  },
  subtitle2: {
    fontSize: ".67em",
    lineHeight: 1.57,
    letterSpacing: 0.1,
    fontWeight: 700,
    color: themeColor.textPrimary,
  },
};

export const dimension = {
  maxWidth: {
    main: 1400,
    mobileContent: 500,
  },
  maxHeight: {
    main: 1200,
  },
  borderRadius: {
    xxs: 5,
    xs: 10,
    s: 20,
    m: 30,
    l: 50,
  },
  spacing: {
    xxs: 4,
    xs: 8,
    s: 16,
    m: 24,
    l: 40,
    xl: 64,
    xxl: 80,
  },
};
