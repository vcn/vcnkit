import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';

import { ThemeProvider } from '../../';

const PrimaryColorComponent = styled.div`
    background: ${props => props.theme.colors.primary};
`;

it('Renders correctly', () => {
    const tree = TestRenderer
        .create(
            <ThemeProvider primary="#FF0000">
                <PrimaryColorComponent />
            </ThemeProvider>,
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
