import { getThemeOrDefault } from '../../';
import defaultTheme from '../../defaultTheme';

test('Returns default theme when no theme is present in props.', () => {
    expect(getThemeOrDefault('colors', {})).toMatchObject(defaultTheme.colors);
});

test('Returns default theme when props are undefined', () => {
    expect(getThemeOrDefault('colors')).toMatchObject(defaultTheme.colors);
});

test('Returns theme from props when it is defined.', () => {
    const mock = {
        theme: {
            colors: {
                sheet: '#FF0000',
            },
        },
    };

    expect(getThemeOrDefault('colors', mock)).toMatchObject(mock.theme.colors);
});
