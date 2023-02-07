import * as React from 'react';
import styled from 'styled-components';

const Grid = ({ children, className }) => (
    <div className={ className }>
        { React.Children.map(
            children,
            child => (
                <div>
                    { child }
                </div>
            )
        ) }
    </div>
);

const StyledGrid = styled(Grid)`
    display:        flex;
    flex-direction: row;
    flex-wrap:      wrap;

    & > div {
        margin-bottom: 2rem;
        margin-right:  2rem;
    }
`;

export default story => (
    <StyledGrid>
        { story() }
    </StyledGrid>
);
