import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import ThemeDecorator from '../../../../.storybook/decorators/ThemeDecorator';
import GridDecorator from '../../../../.storybook/decorators/GridDecorator';
import * as Tabs from '../components/index';

const Container = styled.div`
    width:  75vw;
    margin: 1rem;
`;

storiesOf('Tabs', module)
    .addDecorator(ThemeDecorator)
    .addDecorator(GridDecorator)
    .add('Tabs', () => [
        <Container>
            <Tabs.Container>
                <Tabs.Tab>Tab 1</Tabs.Tab>
                <Tabs.Tab disabled>Tab 2 with additional text</Tabs.Tab>
                <Tabs.Tab>Tab 3</Tabs.Tab>
                <Tabs.Tab disabled>Tab 4 that's also slightly long</Tabs.Tab>
                <Tabs.Tab>Tab 5</Tabs.Tab>
                <Tabs.Tab disabled>Tab 6</Tabs.Tab>
                <Tabs.Tab>Tab 7</Tabs.Tab>
            </Tabs.Container>
            <hr style={ { marginTop: '2rem', marginBottom: '1rem' } } />
            <Tabs.Container width="4">
                <Tabs.Tab>Tab 1</Tabs.Tab>
                <Tabs.Tab disabled>Tab 2 with additional text</Tabs.Tab>
                <Tabs.Tab>Tab 3</Tabs.Tab>
                <Tabs.Tab>Tab 4 that's also slightly long</Tabs.Tab>
                <Tabs.Tab>Tab 5</Tabs.Tab>
                <Tabs.Tab disabled>Tab 6</Tabs.Tab>
                <Tabs.Tab>Tab 7</Tabs.Tab>
            </Tabs.Container>
        </Container>
    ]);
