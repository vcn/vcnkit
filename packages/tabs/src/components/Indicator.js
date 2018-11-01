import * as React from 'react';
import styled from 'styled-components';

export default styled.div`
    background-color: ${ props => props.indicatorColor ? `${ props.indicatorColor }` : '#5282B5' };
    height: 0.125rem;
    width: ${ props => props.width ? `${ props.width }px` : '0' };
    left: ${ props => props.offset }px;
    bottom: 0;
    position: absolute;
    content: ' ';
    transition: left 400ms, width 400ms;
`;
