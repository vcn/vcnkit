import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { hoverable } from '../';

const DemoComponent = ({ hovering, ...rest }) => <div {...rest}>{hovering ? 'Hovering!' : 'Not hovering :('}</div>;

const DecoratedDemoComponent = hoverable()(DemoComponent);

storiesOf('Decorators', module).add('hoverable', () => (
    <DecoratedDemoComponent onMouseEnter={action('onMouseEnter')} onMouseLeave={action('onMouseLeave')} />
));
