import * as React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import styled from 'styled-components';

import fonts from '../../fonts';
import { getTextStyle } from '../../';

const styles = [
    'hero',
    'title1',
    'title2',
    'title3',
    'headline',
    'body',
    'callout',
    'subhead',
    'footnote',
    'caption1',
    'caption2',
    'overline',
];

function testStyle(style) {
    return function() {
        const Text = styled.div`
            ${getTextStyle(style)};
        `;

        const tree = renderer.create(<Text />).toJSON();

        const size = `${style}Size`;
        const weight = `${style}Weight`;
        const lineHeight = `${style}LineHeight`;
        const letterSpacing = `${style}LetterSpacing`;

        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
        expect(tree).toHaveStyleRule('font-size', `${fonts[size]}em`);
        expect(tree).toHaveStyleRule('font-weight', `${fonts[weight]}`);
        expect(tree).toHaveStyleRule('line-height', `${fonts[lineHeight]}`);
        expect(tree).toHaveStyleRule('letter-spacing', `${fonts[letterSpacing]}em`);
    };
}

it('Provides the hero-style correctly', testStyle('hero'));
it('Provides the title1-style correctly', testStyle('title1'));
it('Provides the title2-style correctly', testStyle('title2'));
it('Provides the title3-style correctly', testStyle('title3'));
it('Provides the headline-style correctly', testStyle('headline'));
it('Provides the body-style correctly', testStyle('body'));
it('Provides the callout-style correctly', testStyle('callout'));
it('Provides the subhead-style correctly', testStyle('subhead'));
it('Provides the footnote-style correctly', testStyle('footnote'));
it('Provides the caption1-style correctly', testStyle('caption1'));
it('Provides the caption2-style correctly', testStyle('caption2'));
it('Provides the overline-style correctly', testStyle('overline'));
