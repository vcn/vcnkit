import { light, dark } from '../colors';
import defaultFonts from '../fonts';

export default function createTheme(darkMode, primary, secondary, fonts = {}, colors = {}, palette) {
    const overrides = {};
    if (primary) {
        overrides.primary = primary;
    }

    if (secondary) {
        overrides.secondary = secondary;
    }

    const mergedColors = darkMode
        ? {
              ...dark,
              ...colors,
              ...overrides,
          }
        : {
              ...light,
              ...colors,
              ...overrides,
          };

    return {
        fonts: {
            ...defaultFonts,
            ...fonts,
        },
        colors: mergedColors,
        palette,
    };
}
