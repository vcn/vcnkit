import * as React from 'react';
import PropTypes from 'prop-types';
import { createHoC, omit, noop } from '../util';

export default function() {
    return function hoverable(WrappedComponent) {
        class Hoverable extends React.Component {
            static propTypes = {
                onMouseEnter: PropTypes.func,
                onMouseLeave: PropTypes.func,
                forwardRef: PropTypes.any,
            };

            static defaultProps = {
                onMouseEnter: noop,
                onMouseLeave: noop,
                forwardRef: undefined,
            };

            state = {
                hovering: false,
            };

            handleMouseEnter = event => {
                const { onMouseEnter } = this.props;

                this.setState({
                    hovering: true,
                });

                onMouseEnter(event);
            };

            handleMouseLeave = event => {
                const { onMouseLeave } = this.props;

                this.setState({
                    hovering: false,
                });

                onMouseLeave(event);
            };

            render() {
                const { forwardRef, ...rest } = this.props;
                const { hovering } = this.state;

                return (
                    <WrappedComponent
                        hovering={hovering}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        ref={forwardRef}
                        {...omit(rest, ['hovering', 'onMouseEnter', 'onMouseLeave'])}
                    />
                );
            }
        }

        Hoverable.displayName = 'Hoverable';
        return createHoC(Hoverable, WrappedComponent);
    };
}
