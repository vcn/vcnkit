import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import defaultPalette from '../palette';
import { createTheme } from '../';

class ThemeProvider extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        primary: PropTypes.string,
        secondary: PropTypes.string,
        dark: PropTypes.bool,
        fonts: PropTypes.object,
        colors: PropTypes.object,
    };

    static defaultProps = {
        dark: false,
        children: undefined,
        primary: undefined,
        secondary: undefined,
        fonts: undefined,
        colors: undefined,
    };

    static getDerivedStateFromProps(nextProps) {
        return {
            theme: createTheme(
                nextProps.dark,
                nextProps.primary,
                nextProps.secondary,
                nextProps.fonts,
                nextProps.colors,
                nextProps.palette ? nextProps.palette : defaultPalette,
            ),
        };
    }

    state = {
        theme: {},
    };

    render() {
        const { children } = this.props;
        const { theme } = this.state;

        return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
    }
}

export default ThemeProvider;
