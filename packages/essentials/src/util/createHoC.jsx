import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

function getComponentName(Component) {
    return Component.displayName || Component.name || 'Component';
}

/**
 * Turns Component into a HoC for WrappedComponent and sets the displayName and makes it so refs can be forwarded.
 *
 * @param {*} Component
 * @param {*} WrappedComponent
 */
export default function createHoC(Component, WrappedComponent) {
    hoistNonReactStatics(Component, WrappedComponent);

    function forwardedRef(props, ref) {
        return <Component {...props} forwardRef={ref} />;
    }

    forwardedRef.displayName = `${getComponentName(Component)}-${getComponentName(WrappedComponent)}`;
    return React.forwardRef(forwardedRef);
}
