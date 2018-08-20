import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PanelContext } from './Panel';
import Icon from './Icon';

const Container = styled.header`
    display: flex;
    flex-direction: row;
    padding: ${props => (props.expanded ? 0.5 : 0)}rem 1.5rem;
    box-sizing: content-box;
    cursor: pointer;
    min-height: 3.25rem;
    transition: padding 0.2s;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.33333333;
    letter-spacing: -0.008em;
    color: hsla(0, 0%, 0%, 0.87);

    &:focus {
        outline: 0;
    }
`;

const IconContainer = styled.div`
    margin-left: auto;
`;

class Header extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        icon: PropTypes.node,
    };

    static defaultProps = {
        children: undefined,
        icon: undefined,
    };

    handleKeyPress = (event, toggle) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggle();
        }
    };

    render() {
        const { children, icon } = this.props;

        return (
            <PanelContext>
                {({ expanded, toggle }) => (
                    <Container
                        tabIndex={0}
                        role="button"
                        expanded={expanded}
                        aria-expanded={expanded}
                        onClick={toggle}
                        onKeyPress={event => this.handleKeyPress(event, toggle)}
                    >
                        {children}
                        <IconContainer>{icon ? icon : <Icon />}</IconContainer>
                    </Container>
                )}
            </PanelContext>
        );
    }
}

export default Header;
