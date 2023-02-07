import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { focusable } from '../';

const DemoComponent = ({ focused, ...rest }) => (
    <div {...rest} tabIndex={0} style={{ border: '1px solid #CCC', padding: '.5rem' }}>
        {focused ? 'Focus!' : 'This element can receive direct focus'}
    </div>
);

const DecoratedDemoComponent = focusable()(DemoComponent);

const DemoChildComponent = ({ focused, ...rest }) => (
    <div {...rest} style={{ border: '1px solid #CCC', padding: '.5rem' }}>
        {focused
            ? 'This should not happen.'
            : 'This element has a child which can receive focus, but will never receive a focus state of itself.'}
        <div tabIndex={0}>Focus-child</div>
    </div>
);

const DecoratedDemoChildComponent = focusable()(DemoChildComponent);

const DemoChildFocusComponent = ({ focused, ...rest }) => (
    <div {...rest} style={{ border: '1px solid #CCC', padding: '.5rem' }}>
        {focused
            ? 'Child has focus.'
            : 'This element has a child which can receive focus, it will get a focus state of itself as well.'}
        <div tabIndex={0}>Focus-child</div>
    </div>
);

const DecoratedDemoChildFocusComponent = focusable(true)(DemoChildFocusComponent);

storiesOf('Decorators', module).add('focusable', () => (
    <div>
        <DecoratedDemoComponent onFocus={action('onFocus')} onBlur={action('onBlur')} />
        <hr />
        <DecoratedDemoChildComponent onFocus={action('onFocus')} onBlur={action('onBlur')} />
        <hr />
        <DecoratedDemoChildFocusComponent onFocus={action('onFocus')} onBlur={action('onBlur')} />
    </div>
));
