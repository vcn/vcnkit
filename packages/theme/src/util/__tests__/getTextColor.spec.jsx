import Color from 'color';

import { getTextColor } from '../../';
import { light } from '../../colors';

function createColor(color, alpha) {
    return alpha >= 1
        ? color
        : Color(color)
              .alpha(alpha)
              .hsl()
              .string();
}

test('Should return primary color by default', () => {
    expect(getTextColor({})).toEqual(createColor(light.primaryText, light.primaryTextAlpha));
});

test('Should return secondary color if prop secondary is truthy.', () => {
    expect(getTextColor({ secondary: true })).toEqual(createColor(light.secondaryText, light.secondaryTextAlpha));
});

test('Should return hint color if prop hint is truthy.', () => {
    expect(getTextColor({ hint: true })).toEqual(createColor(light.hintText, light.hintTextAlpha));
});

test('Should return disabled color if prop disabled is truthy.', () => {
    expect(getTextColor({ disabled: true })).toEqual(createColor(light.disabledText, light.disabledTextAlpha));
});

test('Disabled prop should take precedence over others.', () => {
    expect(getTextColor({ secondary: true, disabled: true })).toEqual(
        createColor(light.disabledText, light.disabledTextAlpha),
    );
});
