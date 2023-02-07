import * as React from 'react';
import PropTypes from 'prop-types';
import { createHoC, omit, noop } from '../util';

export default function() {
    return function expandable(WrappedComponent) {
        class Expandable extends React.Component {
            static propTypes = {
                expanded: PropTypes.bool,
                initialExpanded: PropTypes.bool,
                forwardRef: PropTypes.node,
                onChange: PropTypes.func,
            };

            static defaultProps = {
                initialExpanded: false,
                onChange: noop,
                expanded: undefined,
                forwardRef: undefined,
            };

            state = {
                expanded: this.props.initialExpanded,
            };

            handleChange = () => {
                const { onChange, expanded } = this.props;

                if (typeof expanded !== 'undefined') {
                    onChange(expanded);
                    return;
                }

                this.setState({
                    expanded: !this.state.expanded,
                });
            };

            render() {
                const { forwardRef, expanded: propExpanded, ...rest } = this.props;
                const { expanded } = this.state;

                return (
                    <WrappedComponent
                        expanded={typeof propExpanded !== 'undefined' ? propExpanded : expanded}
                        onChange={this.handleChange}
                        ref={forwardRef}
                        {...omit(rest, ['onChange'])}
                    />
                );
            }
        }

        Expandable.displayName = 'Expandable';
        return createHoC(Expandable, WrappedComponent);
    };
}
