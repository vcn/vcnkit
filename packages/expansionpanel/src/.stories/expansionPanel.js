import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeDecorator from '../../../../.storybook/decorators/ThemeDecorator';

import * as ExpansionPanel from '../index';

storiesOf('ExpansionPanel', module)
    .addDecorator(ThemeDecorator)
    .add('Controlled by state', () => (
        <div>
            <ExpansionPanel.Panel>
                <ExpansionPanel.Header>Preferences</ExpansionPanel.Header>
                <ExpansionPanel.Content>
                    <div style={{ height: '300px' }}>Preferences</div>
                </ExpansionPanel.Content>
            </ExpansionPanel.Panel>
            <ExpansionPanel.Panel>
                <ExpansionPanel.Header>E-mail settings</ExpansionPanel.Header>
                <ExpansionPanel.Content>
                    <div style={{ height: '200px' }}>E-mail settings</div>
                </ExpansionPanel.Content>
            </ExpansionPanel.Panel>
            <ExpansionPanel.Panel>
                <ExpansionPanel.Header>General</ExpansionPanel.Header>
                <ExpansionPanel.Content>
                    <div style={{ height: '100px' }}>General</div>
                </ExpansionPanel.Content>
            </ExpansionPanel.Panel>
        </div>
    ))
    .add('Controlled by Set', () => (
        <ExpansionPanel.Set>
            {(expanded, toggle) => (
                <React.Fragment>
                    <ExpansionPanel.Panel expanded={expanded === 'first'} onChange={() => toggle('first')}>
                        <ExpansionPanel.Header>Preferences</ExpansionPanel.Header>
                        <ExpansionPanel.Content>
                            <div style={{ height: '300px' }}>Preferences</div>
                        </ExpansionPanel.Content>
                    </ExpansionPanel.Panel>
                    <ExpansionPanel.Panel expanded={expanded === 'second'} onChange={() => toggle('second')}>
                        <ExpansionPanel.Header>E-mail settings</ExpansionPanel.Header>
                        <ExpansionPanel.Content>
                            <div style={{ height: '200px' }}>E-mail settings</div>
                        </ExpansionPanel.Content>
                    </ExpansionPanel.Panel>
                    <ExpansionPanel.Panel expanded={expanded === 'third'} onChange={() => toggle('third')}>
                        <ExpansionPanel.Header>General</ExpansionPanel.Header>
                        <ExpansionPanel.Content>
                            <div style={{ height: '100px' }}>General</div>
                        </ExpansionPanel.Content>
                    </ExpansionPanel.Panel>
                </React.Fragment>
            )}
        </ExpansionPanel.Set>
    ));
