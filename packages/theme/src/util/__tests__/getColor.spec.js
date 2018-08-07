import { getColor } from '../../';
import defaultTheme from '../../defaultTheme';

const mockTheme = {
    theme: {
        colors: {
            sheet: '#FF0000',
            body: '#FF0000',
            bodyAlpha: 0.5,
        },
    },
};

test('getColor should return a function expecting props when no props are passed.', () => {
    expect(getColor('sheet')(mockTheme)).toEqual('#FF0000');
});

test('getColor should return the color right away when props are passed.', () => {
    expect(getColor('sheet', mockTheme)).toEqual('#FF0000');
});

test('getColor should return a hsla() value when an alpha value is defined.', () => {
    expect(getColor('body', mockTheme)).toEqual('hsla(0, 100%, 50%, 0.5)');
});

test('getColor should fall back to default theme when none has been provided.', () => {
    expect(getColor('body')()).toEqual(defaultTheme.colors.body);
});
