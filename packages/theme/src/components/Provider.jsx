import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import defaultPalette from '../palette';
import { createTheme } from '../';
import {useMemo} from "react";
// }
function ThemeProvider({children, dark, primary, secondary, fonts, colors, palette}) {
        const theme = useMemo(
            ()=>createTheme(
                dark,
                primary,
                secondary,
                fonts,
                colors,
                palette ?? defaultPalette
            ),
            [dark, primary, secondary, fonts, colors, palette]
        );
        console.log(theme);

        return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export default ThemeProvider;
