const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

export const light = {
  fontSizes,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
  color: {
    bg: "#efefef",
    basic: "#222222",
    basicText: "#efefef",
    sectionBg: "#fff",
    textColor: "#555",
    textColor2: "#555",
    pointColor: "#c0392b",
    pointColor2: "#ff4c38",
  },
  boxShadow: {
    box: "0px 0px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
};

export const dark = {
  fontSizes,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
  color: {
    bg: "#000",
    basic: "#efefef",
    basicText: "#efefef",
    sectionBg: "#2c2c2c",
    textColor: "#eee",
    textColor2: "#858585",
    pointColor: "#c0392b",
    pointColor: "#ff4c38",
  },
  boxShadow: {
    box: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
  },
};
