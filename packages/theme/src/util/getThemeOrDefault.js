import defaultTheme from '../defaultTheme';

/**
 * Get a specific key from the theme provided by the ThemeProvider
 * or the default theme as fallback.
 */
export default function getThemeOrDefault(key, props) {
    if (props && props.theme && key in props.theme) {
        return props.theme[key];
    }

    return key in defaultTheme ? defaultTheme[key] : {};
}
