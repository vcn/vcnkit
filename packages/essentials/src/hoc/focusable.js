import * as React from 'react';
import PropTypes from 'prop-types';
import { createHoC, omit, noop, isTargetDescendantOf, getRelatedTarget } from '../util';

export default function(focusOnChildFocus = false) {
    return function focusable(WrappedComponent) {
        class Focusable extends React.Component {
            static propTypes = {
                onFocus: PropTypes.func,
                onBlur: PropTypes.func,
                disabled: PropTypes.bool,
                forwardRef: PropTypes.any,
            };

            static defaultProps = {
                onFocus: noop,
                onBlur: noop,
                disabled: false,
                forwardRef: undefined,
            };

            state = {
                focused: false,
            };

            handleFocus = event => {
                const { disabled, onFocus } = this.props;

                if (disabled) {
                    return;
                }

                if (
                    !focusOnChildFocus &&
                    event.currentTarget instanceof Node &&
                    event.target instanceof Node &&
                    isTargetDescendantOf(event.currentTarget, event.target)
                ) {
                    return;
                }

                this.setState({
                    focused: true,
                });

                onFocus(event);
            };

            handleBlur = event => {
                const { onBlur } = this.props;

                if (focusOnChildFocus) {
                    const relatedTarget = getRelatedTarget(event);

                    if (
                        event.currentTarget instanceof Node &&
                        relatedTarget instanceof Node &&
                        isTargetDescendantOf(event.currentTarget, relatedTarget)
                    ) {
                        return;
                    }
                }

                this.setState({
                    focused: false,
                });

                onBlur(event);
            };

            render() {
                const { forwardRef, ...rest } = this.props;
                const { focused } = this.state;

                return (
                    <WrappedComponent
                        focused={focused}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        ref={forwardRef}
                        {...omit(rest, ['onFocus', 'onBlur', 'focused'])}
                    />
                );
            }
        }

        Focusable.displayName = 'Focusable';
        return createHoC(Focusable, WrappedComponent);
    };
}
