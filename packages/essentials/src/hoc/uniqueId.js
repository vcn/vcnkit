import * as React from 'react';
import PropTypes from 'prop-types';
import { createHoC, omit } from '../util';

function* idGenerator() {
    let idCount = 0;

    while (true) {
        yield `vkuid-${idCount}`;
        idCount += 1;
    }
}

const generator = idGenerator();

export default function() {
    return function uniqueId(WrappedComponent) {
        class UniqueId extends React.Component {
            static propTypes = {
                forwardRef: PropTypes.any,
            };

            static defaultProps = {
                forwardRef: undefined,
            };

            id;

            getId = suffix => {
                if (!this.id) {
                    this.id = generator.next().value;
                }

                return !suffix ? this.id : `${this.id}-${suffix}`;
            };

            render() {
                const { forwardRef, ...rest } = this.props;

                return <WrappedComponent ref={forwardRef} getId={this.getId} {...omit(rest, ['getId'])} />;
            }
        }

        UniqueId.displayName = 'UniqueId';
        return createHoC(UniqueId, WrappedComponent);
    };
}
