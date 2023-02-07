import Color from 'color';

import getThemeOrDefault from './getThemeOrDefault';

/**
 * Creates a HEX or HSLA() color based on the given alpha.
 *
 * @param {string} color
 * @param {number} alpha
 *
 * @return {string}
 */
function createColor(color, alpha) {
    return alpha >= 1
        ? color
        : Color(color)
              .alpha(alpha)
              .hsl()
              .string();
}

/**
 * Retrieves an (inverted) color from the given theme, will fall back
 * to the default theme.
 *
 * @param {string} name
 * @param {object} props
 * @param {bool}   inverted
 *
 * @return {string}
 */
function getColor(name, props) {
    const t = getThemeOrDefault('colors', props);

    if (props && props.inverted) {
        const invertedName = `${name}Inverted`;

        if (invertedName in t) {
            const alphaName = `${invertedName}Alpha`;
            return createColor(t[invertedName], t[alphaName] || 1);
        }
    }

    if (name in t) {
        const alphaName = `${name}Alpha`;
        return createColor(t[name], t[alphaName] || 1);
    }

    return '#000000';
}

/**
 * Retrieves an (inverted) color from the given theme, will fall back
 * to the default theme.
 *
 * @param {string} name
 * @param {object} props
 */
export default function(name, props) {
    if (props) {
        return getColor(name, props);
    }

    return props => getColor(name, props);
}
