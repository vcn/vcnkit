import * as React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from '../../packages/theme/src';

const Wrapper = styled.div`
    padding:          1rem;
    background-color: ${ props => props.theme.colors.body };
`;

const Theme = ({ dark, children }) => (
    <ThemeProvider dark={ dark }>
        <Wrapper>
            { children }
        </Wrapper>
    </ThemeProvider>
);

export default story => (
    <div>
        <Theme>
            { story() }
        </Theme>
        <Theme dark>
            { story() }
        </Theme>
    </div>
)