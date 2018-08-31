import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { getColor } from '@vcnkit/theme';

const Container = styled.div`
    position:   relative;
    overflow:   hidden;
    height:     .25rem;
    background: hsla(255, 100%, 100%, .87);
    width:      100%;
`;

const indeterminateAnimation1 = keyframes`
    0% { left: -35%; right: 100%; }
    60% { left: 100%; right: -90%; }
    100% { left: 100%; right: -90%; }
`;

const indeterminateAnimation2 = keyframes`
    0% { left: -200%; right: 100%; }
    60% { left: 107%; right:  -8%; }
    100% { left: 107%; right: -8%; }
`;

const ProgressBar = styled.div`
    width:       auto;
    will-change: left, right;
    background:  ${ props => props.color ? props.color : getColor('primary') };

    ${ props => !props.determinate ? `
        animation: ${ indeterminateAnimation1 } 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    ` : `
        transition: right .15s;
    `}

    position:         absolute;
    bottom:           0;
    top:              0;
    left:             0;
    transform-origin: left;
`;

const ProgressBar2 = ProgressBar.extend`
    animation:        ${ indeterminateAnimation2 } 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay:  1.15s;
`;

const Linear = ({ percentage, color }) => {
    const determinate = typeof percentage !== 'undefined';

    return (
        <Container>
            <ProgressBar
                determinate={ determinate }
                color={ color }
                style={ determinate ? {
                    right: `${ 100 - Math.min(Math.abs(percentage), 100) }%`,
                } : undefined }
            />
            { !determinate && <ProgressBar2 /> }
        </Container>        
    );
};

Linear.propTypes = {
    percentage: PropTypes.number,
    color:      PropTypes.string,
};

Linear.defaultProps = {
    percentage: undefined,
    color:      undefined,
};

export default Linear;
