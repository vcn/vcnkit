import * as React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import styled from 'styled-components';

import fonts from '../../fonts';
import { getTextStyle } from '../../';

it('Provides hero style correctly', () => {
    const HeroText = styled.div`
        ${getTextStyle('hero')};
    `;

    const tree = renderer.create(<HeroText />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.heroSize}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.heroWeight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.heroLineHeight}`);
});

it('Provides headline style correctly', () => {
    const HeadlineText = styled.div`
        ${getTextStyle('headline')};
    `;

    const tree = renderer.create(<HeadlineText />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.headlineSize}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.headlineWeight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.headlineLineHeight}`);
});

it('Provides title1 style correctly', () => {
    const Title1Text = styled.div`
        ${getTextStyle('title1')};
    `;

    const tree = renderer.create(<Title1Text />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.title1Size}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.title1Weight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.title1LineHeight}`);
});

it('Provides title2 style correctly', () => {
    const Title2Text = styled.div`
        ${getTextStyle('title2')};
    `;

    const tree = renderer.create(<Title2Text />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.title2Size}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.title2Weight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.title2LineHeight}`);
});

it('Provides subheading1 style correctly', () => {
    const Subheading1Text = styled.div`
        ${getTextStyle('subheading1')};
    `;

    const tree = renderer.create(<Subheading1Text />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.subheading1Size}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.subheading1Weight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.subheading1LineHeight}`);
});

it('Provides subheading2 style correctly', () => {
    const Subheading2Text = styled.div`
        ${getTextStyle('subheading2')};
    `;

    const tree = renderer.create(<Subheading2Text />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.subheading2Size}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.subheading2Weight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.subheading2LineHeight}`);
});

it('Provides body1 style correctly', () => {
    const Body1Text = styled.div`
        ${getTextStyle('body1')};
    `;

    const tree = renderer.create(<Body1Text />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.body1Size}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.body1Weight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.body1LineHeight}`);
});

it('Provides body2 style correctly', () => {
    const Body2Text = styled.div`
        ${getTextStyle('body2')};
    `;

    const tree = renderer.create(<Body2Text />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.body2Size}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.body2Weight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.body2LineHeight}`);
});

it('Provides caption style correctly', () => {
    const CaptionText = styled.div`
        ${getTextStyle('caption')};
    `;

    const tree = renderer.create(<CaptionText />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('font-family', '"Roboto",sans-serif');
    expect(tree).toHaveStyleRule('font-size', `${fonts.captionSize}rem`);
    expect(tree).toHaveStyleRule('font-weight', `${fonts.captionWeight}`);
    expect(tree).toHaveStyleRule('line-height', `${fonts.captionLineHeight}`);
});
