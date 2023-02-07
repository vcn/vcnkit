import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const Circular = ({ className, width, percentage }) => {
    const determinate = typeof percentage !== 'undefined';

    return (
        <svg
            width={ width }
            viewBox="0 0 42 42"
            xmlns="http://www.w3.org/2000/svg"
            className={ className }
        >
            { determinate ? (
                <circle
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    strokeDashoffset="25"
                    strokeDasharray={ `${ percentage } ${ 100 - percentage }` }
                />
            ) : (
                <circle
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                />
            ) }
        </svg>
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

const rotateAnim = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }    
`;

const circleAnim = keyframes`
    0% { stroke-dashoffset: 118; }
    50% { stroke-dashoffset: 29.5; transform: rotate(135deg); }
    100% { stroke-dashoffset: 118; transform: rotate(450deg); }
`;

export default styled(Circular)`
    ${ props => typeof props.percentage === 'undefined' ? css`
        animation: ${ rotateAnim } 1.4s linear infinite;
    ` : `` }

    circle {
        stroke:     #5282B5;
        transition: all .15s;

        ${ props => !props.determinate ? css`
            stroke-dasharray:  118;
            stroke-dashoffset: 0;
            transform-origin:  center;
            animation:         ${ circleAnim } 1.4s ease-in-out infinite;
        ` : `` }
    }
`;
