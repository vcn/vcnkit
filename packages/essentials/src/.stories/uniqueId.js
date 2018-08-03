import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { uniqueId } from '../';

const DemoComponent = ({ getId }) => (
    <div>
        <h1 id={getId('header')}>{getId('header')}</h1>
        <p id={getId('paragraph')}>{getId('paragraph')}</p>
    </div>
);

const DecoratedDemoComponent = uniqueId()(DemoComponent);

storiesOf('Decorators', module).add('uniqueId', () => <DecoratedDemoComponent />);
