import * as React from 'react';
import styled from 'styled-components';

import { PanelContext } from './Panel';

const Arrow = styled.svg`
    transition: 0.2s ease-in-out;
    transform: rotate(${props => (props.expanded ? -180 : 0)}deg);
    height: 1.5rem;
    width: 1.5rem;
    fill: hsla(0, 0%, 0%, .54);

    display: block;
`;

const Icon = () => (
    <PanelContext>
        {({ expanded }) => (
            <Arrow xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" expanded={expanded}>
                <path d="M33.17 17.17L24 26.34l-9.17-9.17L12 20l12 12 12-12z" />
            </Arrow>
        )}
    </PanelContext>
);

export default Icon;
