import * as React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import styled from 'styled-components';

import { ThemeProvider } from '../../';

const PrimaryColorComponent = styled.div`
    background: ${props => props.theme.colors.primary};
`;

it('Renders correctly', () => {
    const tree = renderer
        .create(
            <ThemeProvider primary="#FF0000">
                <PrimaryColorComponent />
            </ThemeProvider>,
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
