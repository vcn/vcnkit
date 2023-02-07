import { createTheme } from '../../';

import defaultFonts from '../../fonts';
import { light, dark } from '../../colors';

test('createTheme should merge primary and secondary color correctly.', () => {
    expect(createTheme(false, '#FF0000', '#FFFF00')).toMatchObject({
        colors: {
            primary: '#FF0000',
            secondary: '#FFFF00',
        },
    });

    expect(createTheme(false)).toMatchObject({
        colors: light,
    });
});

test('createTheme should return dark colors correctly.', () => {
    expect(createTheme(true)).toMatchObject({
        colors: dark,
    });
});

test('createTheme should merge colors correctly', () => {
    expect(createTheme(false, undefined, undefined, undefined, { body: '#FF0000' })).toMatchObject({
        colors: {
            ...light,
            body: '#FF0000',
        },
    });
});

test('createTheme should return dark colors correctly.', () => {
    expect(createTheme(true)).toMatchObject({
        colors: dark,
    });
});

test('createTheme should merge fonts correctly.', () => {
    expect(createTheme(false, undefined, undefined, { headingFont: 'Arial' })).toMatchObject({
        fonts: {
            ...defaultFonts,
            headingFont: 'Arial',
        },
    });
});

test('createTheme should set palette correctly', () => {
    expect(createTheme(false, undefined, undefined, undefined, undefined, ['#FF0000', '#FFFF00'])).toMatchObject({
        palette: ['#FF0000', '#FFFF00'],
    });
});
