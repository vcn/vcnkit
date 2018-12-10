import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop, expandable } from '@vcnkit/essentials';
import { getShadow } from '@vcnkit/theme';

const { Provider, Consumer: PanelContext } = React.createContext({
    expanded: false,
    toggle: noop,
});

const Panel = ({ className, children, expanded, onChange }) => (
    <Provider
        value={{
            expanded,
            toggle: onChange,
        }}
    >
        <div className={className}>{children}</div>
    </Provider>
);

Panel.propTypes = {
    children: PropTypes.node,
};

Panel.defaultProps = {
    children: undefined,
};

const StyledPanel = styled(Panel)`
    border-radius: ${props => (props.expanded ? 0.125 : 0)}rem;
    margin: ${props => (props.expanded ? 1 : 0)}rem 0;

    &:first-child {
        margin-top: 0;
        border-radius: 0.125rem 0.125rem 0 0;
    }

    &:last-child {
        border-radius: 0 0 0.125rem 0.125rem;
    }

    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);

    box-shadow: ${getShadow(1)};
    background: #ffffff;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        border-bottom: .0625rem solid #EFEFEF;
    }
`;

export default expandable()(StyledPanel);
export { PanelContext };
