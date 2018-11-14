import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const Linear = ({ className, percentage }) => {
    const determinate = typeof percentage !== 'undefined';

    return (
        <div className={ className }>
            <div
                style={ determinate ? {
                    right: `${ 100 - Math.min(Math.abs(percentage), 100) }%`,
                } : undefined }
            />
            { !determinate && <div /> }
        </div>        
    );
};

Linear.propTypes = {
    percentage: PropTypes.number,
};

Linear.defaultProps = {
    percentage: undefined,
};

const indeterminateAnim1 = keyframes`
    0% { left: -35%; right: 100%; }
    60% { left: 100%; right: -90%; }
    100% { left: 100%; right: -90%; }
`;

const indeterminateAnim2 = keyframes`
    0% { left: -200%; right: 100%; }
    60% { left: 107%; right:  -8%; }
    100% { left: 107%; right: -8%; }
`;

export default styled(Linear)`
    position:   relative;
    overflow:   hidden;
    background: hsla(255, 100%, 100%, .87);
    width:      100%;
    height:     .125rem;

    & > div {
        width:            auto;
        will-change:      left, right;
        transform-origin: left;
        background-color: #5282B5;

        position: absolute;
        bottom:   0;
        top:      0;
        left:     0;

        &:first-child {
            ${ props => typeof props.percentage !== 'undefined' ? `
                transition: right .15s;
            ` : css`
                animation: ${ indeterminateAnim1 } 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
            ` }
        }

        ${ props => typeof props.percentage === 'undefined' && css`
            &:last-child {
                animation:       ${ indeterminateAnim2 } 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
                animation-delay: 1.15s;
            }
        ` }
    }
`;
