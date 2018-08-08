# VCNKit/Theme

`@vcnkit/theme` provides a default theme, a `<ThemeProvider>`, typography components and utilities to use the theme inside components.

## Installation

NPM
```sh
$ npm install --save @vcnkit/theme
```

Yarn
```
$ yarn add @vcnkit/theme
```

## Requirements

For the default theme, you should have the [Roboto](https://fonts.google.com/specimen/Roboto) font loaded somewhere in your application.

[Styled-Components](https://www.styled-components.com) should also be installed.

## Default theme

If there is no `<ThemeProvider>` present in the tree, the default `light` theme will be used in utilities and components.

## Utilities

### getColor(string: identifier, ?object: props)

Will return the color as identified by `identifier` from the theme. If the `props`-param is omitted, a function in the shape of `props => getColor(identifier, props)` will be returned.

```jsx
import styled from 'styled-components';
import { getColor } from '@vcnkit/theme';

// Because getColor() returns a function when the props-param is omitted, styled-components will automatically call the resulting function with the props.
const SomeDiv = styled.div`
    background: ${ getColor('sheet') };
`;

// Or you can do it yourself by passing the props.
const SomeOtherDiv = styled.div`
    background: ${ props => getColor('sheet', props) };
`;
```

Valid identifiers are:

* `primary`
* `secondary`
* `body`
* `sheet`
* `divider`
* `primaryText`
* `secondaryText`
* `disabledText`
* `hintText`
* `activeIcon`
* `inactiveIcon`

Most of the colors above come with an inverted-variant, this will be returned if `props.inverted` is truthy. The inverted variant of the color is basically the color as defined in the `dark` (or `light` theme if you are using the dark theme) theme.

### getShadow(number: elevation)

Creates a value for the [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) CSS property based on the given [elevation](https://material.io/design/environment/elevation.html#elevation-in-material-design). An elevation of `0` renders no shadow.

```jsx
import styled from 'styled-components';
import { getShadow } from '@vcnkit/theme';

const SomeDiv = styled.div`
    box-shadow: ${ getShadow(1) };

    &:hover {
        box-shadow: ${ getShadow(4) };
    }
`;
```

### getTextStyle(string: type)

Returns a styled-components [css](https://www.styled-components.com/docs/api#css) template literal with rules for the following CSS properties:

* `font-family`
* `font-weight`
* `font-size`
* `line-height`
* `line-height`
* `color`

```jsx
import styled from 'styled-components';
import { getTextStyle } from '@vcnkit/theme';

const SomeParagraph = styled.p`
    ${ getTextStyle('body') }
`;

const SomeComponent = () => (
    <SomeParagraph>This is the body style.</SomeParagraph>
);
```

Valid types are:

* `hero`
* `title1`
* `title2`
* `title3`
* `headline`
* `body`
* `callout`
* `subhead`
* `footnote`
* `caption1`
* `caption2`
* `overline`

### getTextColor(?object: props)

This utility method will return either the `primaryText`, `secondaryText`, `disabledText` or `hintText` color based on props. The following props (in order of precedence) are used:

* `disabled`
* `hint`
* `secondary`

If all of the above props result in `false`, the `primaryText` color is returned.

```jsx
import styled from 'styled-components';
import { getTextColor } from '@vcnkit/theme';

const SomeParagraph = styled.p`
    color: ${ props => getTextColor(props) };
`;

const SomeComponent = () => (
    <SomeParagraph disabled>This text is disabled</SomeParagraph>
);
```

### getThemeOrDefault(string: key, ?object: props)

Retrieves the sub-theme as identified by `key` from either the `<ThemeProvider>`'s theme or the default theme.

```jsx
import styled from 'styled-components';
import { getThemeOrDefault } from '@vcnkit/theme';

const SomeDiv = styled.div`
    background: ${ props => getThemeOrDefault('colors', props).body; }
`;
```

## ThemeProvider

If you want to change the colors, fonts or palette for VCNKit-components you need to include `<ThemeProvider>` somewhere in your component tree. Under the hood, this component uses [styled-components](https://www.styled-components.com/)' `ThemeProvider`.

### Using the `dark`-theme

```jsx
import { ThemeProvider } from '@vcnkit/theme';

const App = () => (
    <ThemeProvider dark>
        ...
    </ThemeProvider>
);
```

### Changing the primary or secondary color

```jsx
import { ThemeProvider } from '@vcnkit/theme';

const App = () => (
    <ThemeProvider
        primary="#FF0000"
        secondary="#FFFF00"
    >
        ...
    </ThemeProvider>
);
```

### Changing other colors
You can override specific colors by passing in a `colors`-prop, this object will be merged with the theme's defaults.

```jsx
import { ThemeProvider } from '@vcnkit/theme';

const App = () => (
    <ThemeProvider
        colors={ {
            inactiveIcon:      '#FFFFFF',
            inactiveIconAlpha: .5,
        } }
    >
        ...
    </ThemeProvider>
);
```

### Changing font settings
Font settings can be changed by passing in a `fonts`-prop, this object will be merged with the theme's defaults.

```jsx
import { ThemeProvider } from '@vcnkit/theme';

const App = () => (
    <ThemeProvider
        fonts={ {
            bodyFamily:     'Arial, sans-serif',
            bodyWeight:     400,
            bodySize:       1,
            bodyLineHeight: 1.25,
        } }
    >
        ...
    </ThemeProvider>
);
```

## Typography

Some default components are provided to help with typography:

* `Hero`
* `Title1`
* `Title2`
* `Title3`
* `Headline`
* `Body`
* `Callout`
* `Subhead`
* `Footnote`
* `Caption1`
* `Caption2`
* `Overline`

And a `Text`-container to provide margins for readability.

```jsx
import { Text, Hero, Body } from '@vcnkit/theme';

const SomeComponent = () => (
    <Text maxWidth>
        <Title>This is a title</Title>
        <Body>Body text</Body>
    </Text>
)
```

The `maxWidth`-prop for `Text` limits the width to `72ch`.

#### Using a different tag for a component

If you want to render `Hero`, which is a `<h1>` by default as a `<p>` instead you can use styled-components' [withComponent](https://www.styled-components.com/docs/api#withcomponent) method.

```jsx
import { Hero } from '@vcnkit/theme';

const MyHero = Hero.withComponent('p');

const SomeComponent = () => (
    <MyHero>This is a paragraph.</MyHero>
);
```

### Styles and colors

All the provided components come in various styles which will be determined by passing the correct props.

```jsx
import { Body, Caption1 } from '@vcnkit/theme';

const SomeComponent = () => (
    <div>
        <Body>This text will show in the default, primary, style.</Body>
        <Body secondary>This will show in the secondary style instead.</Body>
        <Caption1 hint>A caption with the hint style</Caption1>
        <Caption1 disabled>A caption with the disabled style</Caption1>
    </div>
);
```

#### Using custom colors or attaching your own styles

To use a custom color, you can simply extend the exported component.

```jsx
import { Title1 } from '@vcnkit/theme';

const RedTitle = Title1.extend`
    color: red;
`;
```

For more information, see [Styled Components: Extending Styles](https://www.styled-components.com/docs/basics#extending-styles)