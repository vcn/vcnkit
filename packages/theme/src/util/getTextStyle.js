import { css } from 'styled-components';

import getThemeOrDefault from './getThemeOrDefault';
import getTextColor from './getTextColor';

function getTextStyle(type, props) {
    const fonts = getThemeOrDefault('fonts', props);

    return `
        font-family: ${fonts[`${type}Family`]};
        font-weight: ${fonts[`${type}Weight`]};
        font-size:   ${fonts[`${type}Size`]}rem;
        line-height: ${fonts[`${type}LineHeight`]};
        color:       ${getTextColor(props)}; 
    `;
}

export default function(type) {
    return css`
        ${props => getTextStyle(type, props)};
    `;
}
