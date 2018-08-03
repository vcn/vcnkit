# VCNKit/Essentials

`@vcnkit/essentials` contains essential utilities, decorators and theming for VCNKit. 

## Installation

NPM
```sh
$ npm install --save @vcnkit/essentials
```

Yarn
```
$ yarn add @vcnkit/essentials
```

## Utilities

### noop()
Simple void function to use as a default prop when your component expects a function.

```jsx
import { noop } from '@vcnkit/essentials';

SomeComponent.defaultProps = {
    onClick: noop,
};
```

### omit(props, [ prop, ... ])
Omits the specified props from the given prop object

```jsx
import { omit } from '@vcnkit/essentials';

const SomeComponent = (props) => (
    <div { ...omit(props, [ 'someProp', 'anotherProp' ]) } >
        'someProp' and 'anotherProp' have been omitted.
    </div>
)
```

### extract(props, [ prop, ... ])
Extracts the specified props from the given prop object, basically the reverse of [omit](#omit)

```jsx
import { extract } from '@vcnkit/essentials';

const SomeComponent = (props) => (
    <div { ...extract(props, [ 'role', 'id' ]) }>
        'role' and 'id' will have been attached to this div.
    </div>
);
```

### getRelatedTarget(event)
Internet Explorer compatible relatedTarget for `blur` events. This function will give you the [node](https://developer.mozilla.org/en-US/docs/Web/API/Node) that will receive focus after the blur has occured.

```jsx
import { getRelatedTarget } from '@vcnkit/essentials';

class SomeComponent extends React.Component {
    handleBlur = event => {
        // Will contain the Node that received focus.
        const relatedTarget = getRelatedTarget(event);
    };

    render() {
        return (
            <input onBlur={ this.handleBlur } />
        );
    }
}
```

### isTargetDescendantOf(root, target)
Checks if the given `target` [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) is a descendant of `root` (but _not_ the same node).

```js
import { isTargetDescendantOf } from '@vcnkit/essentials';

function isBodyDescendantOfDocument() {
    return isTargetDescendantOf(document, document.body);
}
```

### createHoC(Component, WrappedComponent)
Utility to reduce boilerplate when creating [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)

It will provide the resulting HoC with a displayName that is a cobmination of `Component` and `WrappedComponent`. It will also take care of [forwarding refs](https://reactjs.org/docs/forwarding-refs.html) and hoisting the non-react statics.

```jsx
import { createHoC } from '@vcnkit/essentials';

function myHoC(WrappedComponent) {
    class MyHoC extends React.Component {
        render() {
            const { forwardRef, ...rest } = this.props;

            return (
                <WrappedComponent
                    ref={ forwardRef }
                    { ...rest }
                />
            )
        }
    }

    MyHoC.displayName = 'MyHoC';
    return createHoC(MyHoC, WrappedComponent);
}
```

## Decorators

### uniqueId
Passes a `getId()` function through props to the decorated component. This function will always return the same identifier for the same instance.

Optionally the `getId()` function takes a `suffix`-parameter, this will result in the given suffix being added to the identifier.

```jsx
import { uniqueId } from '@vcnkit/essentials';

@uniqueId()
class SomeComponent extends React.Component {
    render() {
        const { getId } = this.props;

        return (
            <div>
                <label htmlFor={ getId('input') }>Label</label>
                <input
                    id={ getId('input') }
                    type="text"
                />
            </div>
        );
    }
}
```

Stateless components can use the decorator by wrappign itself.
```jsx
import { uniqueId } from '@vcnkit/essentials';

const SomeComponent = ({ getId }) => (
    <div>
        <label htmlFor={ getId('input') }>Label</label>
        <input
            id={ getId('input') }
            type="text"
        />
    </div>
);

export default uniqueId()(SomeComponent);
```

### hoverable

Provides decorated components with a `hovering`-prop. This props tells the component if the user is currently hovering over the element.

To make this work, this decorator provides the `onMouseEnter` and `onMouseLeave` props which should be attached to your component.

```jsx
import { hoverable } from '@vcnkit/essentials';

@hoverable()
class SomeComponent extends React.Component {
    render() {
        const { hovering, onMouseEnter, onMouseLeave, ...rest } = this.props;

        return (
            <div
                onMouseEnter={ onMouseEnter }
                onMouseLeave={ onMouseLeave }
                { ...rest }
            >
                { hovering ? 'User is hovering over this div!' : 'User is not hovering over this div' }
            </div>
        );
    }
}
```

Stateless components can use the decorator by wrapping itself.

```jsx
import { hoverable } from '@vcnkit/essentials';

const SomeComponent = ({ hovering, onMouseEnter, onMouseLeave, ...rest ) => (
    <div
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
        { ...rest }
    >
        { hovering ? 'User is hovering over this element!' : 'User is not hovering over this element' }
    </div>
);

export default hoverable()(SomeComponent);    
```

### focusable(focusOnChildFocus = false)

Provides decorated components with a `focused`-prop. This prop tells the component if the component currently has focus, or if `focusOnChildFocus` is true if a child component has focus.

This decorator will not provide a `tabIndex` prop, the component itself is responsible for giving itself or it's children a `tabIndex` prop.

```jsx
import { focusable } from '@vcnkit/essentials';

@focusable()
class SomeComponent extends React.Component {
    render() {
        const { focused, onFocus, onBlur, ...rest } = this.props;

        return (
            <div
                onFocus={ onFocus }
                onBlur={ onBlur }
                tabIndex={ 0 }
                { ...rest }
            >
                { focused ? 'Element has focus' : 'Element does not have focus' }
            </div>
        );
    }
}
```

Stateless components can use the decorator by wrapping itself.

```jsx
import { focusable } from '@vcnkit/essentials';

const SomeComponent = ({ hovering, onMouseEnter, onMouseOut, ...rest ) => (
    <div
        onFocus={ onFocus }
        onBlur={ onBlur }
        tabIndex={ 0 }
        { ...rest }
    >
        { focused ? 'Element has focus' : 'Element does not have focus' }
    </div>
);

export default focusable()(SomeComponent);    
```

### expandable

Provides decorated components with a `expanded`-prop. The expansion state can either be controlled from another component by passing your own `expanded`-prop to the decorated component. When it changes, an attached `onChange(currentExpandedState: bool)` will be triggered.

It is also possible to let the decorator keep the state internal, you can set the default state by passing `initialExpanded`.

```jsx
import { expandable } from '@vcnkit/essentials';

@expandable()
class SomeComponent extends React.Component {
    render() {
        const { expanded, onChange } = this.props;

        return (
            <div>
                <h1 onClick={ onChange }>Click here to toggle</h1>
                { expanded && (
                    <p>Expanded!</p>
                ) }
            </div>
        )
    }
}

// Using internal state (starts expanded)
const SomeOtherComponent = () => (
    <SomeComponent initialExpanded/>
)

// Controlling state from another component
class ExpandController extends React.Component {
    state = {
        expanded: false,
    };

    handleChange = (currentExpandedState) => {
        this.setState({
            expanded: !currentExpandedState,
        });
    }

    render() {
        const { expanded } = this.state;

        return (
            <SomeComponent
                expanded={ expanded }
                onChange={ this.handleChange }
            />
        )
    }
}
```

### Decorating a class or stateless component with multiple decorators

If you want a component to have both the `hoverable` and `focusable` decorators, you can simply chain them.

```jsx
import * as React from 'react';
import { hoverable, focusable } from '@vcnkit/essentials';

@focusable()
@hoverable()
class SomeClassComponent extends React.Component {
    render() {
        const { hovering, focused, ...rest } = this.props;

        return (
            <div
                tabIndex={ 0 }
                { ...rest }
            >
                { hovering ? 'User is hovering over this element!' : 'User is not hovering over this element' }
                { focused ? 'Element has focus' : 'Element does not have focus' }
            </div>            
        )
    }
}
```

And for stateless components

```jsx
import { hoverable, focusable } from '@vcnkit/essentials';

/*
 * ...rest will contain all the necessary event handlers. onMouseEnter, onMouseLeave, onFocus and onBlur
 */
const SomeComponent = ({ hovering, focused, ...rest }) => (
    <div
        tabIndex={ 0 }
        { ...rest }
    >
        { hovering ? 'User is hovering over this element!' : 'User is not hovering over this element' }
        { focused ? 'Element has focus' : 'Element does not have focus' }
    </div>
);

export default focusable()(hoverable()(SomeComponent))
```

### Attaching `refs` to decorated components

The decorators in `@vcnkit/essentials` utilize React's [forwardRef API](https://reactjs.org/docs/forwarding-refs.html) to pass refs to the decorated components. 

Using React's [createRef API](https://reactjs.org/docs/refs-and-the-dom.html):

```jsx
import * as React from 'react';
import { hoverable } from '@vcnkit/essentials';

@hoverable()
class MyDecoratedComponent extends React.Component {
    ...
}

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        // This will hold a ref to 'MyDecoratedComponent' instead of the decorator itself.
        this.ref = React.createRef();
    }

    render() {
        return (
            <MyDecoratedComponent
                ref={ this.ref }
            />
        )
    }
}
```

Or, using a callback ref:

```jsx
import * as React from 'react';
import { hoverable } from '@vcnkit/essentials';

@hoverable()
class MyDecoratedComponent extends React.Component {
    ...
}

class MyComponent extends React.Component {
    render() {
        return (
            <MyDecoratedComponent
                ref={ ref => { this.ref = ref; } }
            />
        )
    }
}
```