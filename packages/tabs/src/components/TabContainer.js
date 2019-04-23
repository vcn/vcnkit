import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop } from '@vcnkit/essentials';

class TabContainer extends React.Component {
    static propTypes = {
        onSelect: PropTypes.func,
        onActive: PropTypes.func,
        children: PropTypes.node,
        tabIndex: PropTypes.number,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        onSelect: noop,
        onActive: noop,
        children: undefined,
        tabIndex: undefined,
        disabled: false,
    };

    tabRef;

    componentDidMount() {
        if (this.props.isSelected) {
            if (!this.props.disabled) {
                this.onSelect();
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSelected && !this.props.isSelected) {
            const { onActive } = this.props;
            const { offsetLeft, offsetWidth } = this.tabRef;

            onActive(offsetLeft, offsetWidth);
        }
    }

    onSelect = () => {
        const { onSelect, onActive, tabIndex, disabled } = this.props;
        const { offsetLeft, offsetWidth } = this.tabRef;

        if (!disabled) {
            onSelect(tabIndex);
            onActive(offsetLeft, offsetWidth);
        }
    };

    render() {
        const { children, className } = this.props;

        return (
            <div
                onClick={ this.onSelect }
                ref={ ref => this.tabRef = ref }
                className={ className }
            >
                { children }
            </div>
        );
    }
}

export default styled(TabContainer)`
    margin: 0.25rem;
    padding: 0.375rem;
    line-height: 1rem;
    text-align: center;
    cursor:  pointer;
    position: relative;
    display: block;
    max-width: 10rem;
    min-width: 6rem;
    width: max-content;

    ${ props => props.isSelected ? 'opacity: 1;' : 'opacity: 0.68;' }
    ${ props => props.disabled && `
        opacity: 0.34 !important;
        cursor: not-allowed;
    ` }

    &:focus {
        outline: none;
    }

    &:hover {
        opacity: 0.80;
    }
`;
