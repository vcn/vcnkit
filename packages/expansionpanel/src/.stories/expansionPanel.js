import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeDecorator from '../../../../.storybook/decorators/ThemeDecorator';

import * as ExpansionPanel from '../index';

storiesOf('ExpansionPanel', module)
    .addDecorator(ThemeDecorator)
    .add('Controlled by state', () => (
        <div>
            <ExpansionPanel.Panel>
                <ExpansionPanel.Header>Test</ExpansionPanel.Header>
                <ExpansionPanel.Content>
                    <div style={{ height: '300px' }}>Test</div>
                </ExpansionPanel.Content>
            </ExpansionPanel.Panel>
            <ExpansionPanel.Panel>
                <ExpansionPanel.Header>Test</ExpansionPanel.Header>
                <ExpansionPanel.Content>
                    <div style={{ height: '200px' }}>Test</div>
                </ExpansionPanel.Content>
            </ExpansionPanel.Panel>
            <ExpansionPanel.Panel>
                <ExpansionPanel.Header>Test</ExpansionPanel.Header>
                <ExpansionPanel.Content>
                    <div style={{ height: '100px' }}>Test</div>
                </ExpansionPanel.Content>
            </ExpansionPanel.Panel>
        </div>
    ))
    .add('Controlled by Set', () => (
        <ExpansionPanel.Set>
            {(expanded, toggle) => (
                <React.Fragment>
                    <ExpansionPanel.Panel expanded={expanded === 'first'} onChange={() => toggle('first')}>
                        <ExpansionPanel.Header>Test</ExpansionPanel.Header>
                        <ExpansionPanel.Content>
                            <div style={{ height: '300px' }}>Test</div>
                        </ExpansionPanel.Content>
                    </ExpansionPanel.Panel>
                    <ExpansionPanel.Panel expanded={expanded === 'second'} onChange={() => toggle('second')}>
                        <ExpansionPanel.Header>Test</ExpansionPanel.Header>
                        <ExpansionPanel.Content>
                            <div style={{ height: '200px' }}>Test</div>
                        </ExpansionPanel.Content>
                    </ExpansionPanel.Panel>
                    <ExpansionPanel.Panel expanded={expanded === 'third'} onChange={() => toggle('third')}>
                        <ExpansionPanel.Header>Test</ExpansionPanel.Header>
                        <ExpansionPanel.Content>
                            <div style={{ height: '100px' }}>Test</div>
                        </ExpansionPanel.Content>
                    </ExpansionPanel.Panel>
                </React.Fragment>
            )}
        </ExpansionPanel.Set>
    ));
