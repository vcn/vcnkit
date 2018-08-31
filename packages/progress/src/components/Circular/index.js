import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { getColor } from '@vcnkit/theme';

const IndeterminateAnimation = keyframes`
    0% { stroke-dashoffset: 118; }
    50% { stroke-dashoffset: 29.5; transform: rotate(135deg); }
    100% { stroke-dashoffset: 118; transform: rotate(450deg); }
`;

const Rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
`;

const Spinner = styled.svg`
    ${ props => props.rotate && `
        animation: ${ Rotate } 1.4s linear infinite;
    ` }
`;

const Circle = styled.circle`
    stroke:     ${ props => props.color ? props.color : getColor('primary') };
    transition: all .15s;
`;

const IndeterminateCircle = Circle.extend`
    stroke-dasharray:  118;
    stroke-dashoffset: 0;
    transform-origin:  center;
    animation:         ${ IndeterminateAnimation } 1.4s ease-in-out infinite;
`;

const Circular = ({ width, percentage, color }) => {
    const determinate = typeof percentage !== 'undefined';

    return (
        <Spinner
            width={ width }
            viewBox="0 0 42 42"
            xmlns="http://www.w3.org/2000/svg"
            rotate={ !determinate }
        >
            { determinate ? (
                <Circle
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    strokeDashoffset="25"
                    strokeDasharray={ `${ percentage } ${ 100 - percentage }` }
                    color={ color }
                />
            ) : (
                <IndeterminateCircle
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    color={ color }
                />
            ) }
        </Spinner>
    );
};

Circular.propTypes = {
    width:      PropTypes.number,
    percentage: PropTypes.number,
    color:      PropTypes.string,
};

Circular.defaultProps = {
    width:      42,
    percentage: undefined,
    color:      undefined,
};

export default Circular;
