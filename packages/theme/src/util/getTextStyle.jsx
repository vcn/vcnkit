import { css } from 'styled-components';

import getThemeOrDefault from './getThemeOrDefault';
import getTextColor from './getTextColor';

function getTextStyle(type, props) {
    const fonts = getThemeOrDefault('fonts', props);

    return `
        font-family:    ${fonts[`${type}Family`]};
        font-weight:    ${fonts[`${type}Weight`]};
        font-size:      ${fonts[`${type}Size`]}em;
        line-height:    ${fonts[`${type}LineHeight`]};
        letter-spacing: ${fonts[`${type}LetterSpacing`]}em;
        color:          ${getTextColor(props)};

        ${props &&
            !props.spacing &&
            `
            margin-bottom: 0;
            margin-top:    0;
        `}
    `;
}

export default function(type) {
    return css`
        ${props => getTextStyle(type, props)};
    `;
}
