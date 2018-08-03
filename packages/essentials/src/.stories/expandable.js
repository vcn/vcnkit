import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { expandable } from '../';

const ExpandableComponent = ({ expanded, onChange }) => (
    <div>
        <h1 onClick={onChange}>Click me to {expanded ? 'collapse' : 'expand'}</h1>
        {expanded && <h2>I am expanded!</h2>}
    </div>
);

const DecoratedExpandableComponent = expandable()(ExpandableComponent);

storiesOf('Decorators', module).add('expandable', () => <DecoratedExpandableComponent />);
