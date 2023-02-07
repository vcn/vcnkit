import * as React from 'react';
import { action } from '@storybook/addon-actions';
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
        <Container key={'tabContainer'}>
            <Tabs.Container selected={ 'TabThree' } onSelect={ action('onSelect') }>
                <Tabs.Tab key="TabOne">Tab 1</Tabs.Tab>
                <Tabs.Tab key="TabTwo" disabled>Tab 2 with additional text</Tabs.Tab>
                <Tabs.Tab key="TabThree">Tab 3</Tabs.Tab>
                <Tabs.Tab key="TabFour" disabled>Tab 4 that's also slightly long</Tabs.Tab>
                <Tabs.Tab key="TabFive">Tab 5</Tabs.Tab>
                <Tabs.Tab key="TabSix" disabled>Tab 6</Tabs.Tab>
                <Tabs.Tab key="TabSeven">Tab 7</Tabs.Tab>
            </Tabs.Container>
            <hr style={ { marginTop: '2rem', marginBottom: '1rem' } }/>
            <Tabs.Container width="4" indicatorColor="rgb(255, 255, 255)">
                <Tabs.Tab key="TabOne">Tab 1</Tabs.Tab>
                <Tabs.Tab key="TabTwo" disabled>Tab 2</Tabs.Tab>
                <Tabs.Tab key="TabThree">Tab 3</Tabs.Tab>
                <Tabs.Tab key="TabFour">Tab 4</Tabs.Tab>
                <Tabs.Tab key="TabFive">Tab 5</Tabs.Tab>
                <Tabs.Tab key="TabSix" disabled>Tab 6</Tabs.Tab>
                <Tabs.Tab key="TabSeven">Tab 7</Tabs.Tab>
            </Tabs.Container>
            <hr style={ { marginTop: '2rem', marginBottom: '1rem' } }/>
            <Tabs.Container scrollDistance={250} width="4" indicatorColor="rgb(0, 0, 0)">
                <Tabs.Tab key="TabOne">Tab 1</Tabs.Tab>
                <Tabs.Tab key="TabTwo">Tab 2</Tabs.Tab>
                <Tabs.Tab key="TabThree">Tab 3</Tabs.Tab>
                <Tabs.Tab key="TabFour">Tab 4</Tabs.Tab>
                <Tabs.Tab key="TabFive">Tab 5</Tabs.Tab>
                <Tabs.Tab key="TabSix">Tab 6</Tabs.Tab>
                <Tabs.Tab key="TabSeven">Tab 7</Tabs.Tab>
                <Tabs.Tab key="TabEight">Tab 8</Tabs.Tab>
                <Tabs.Tab key="TabNine">Tab 9</Tabs.Tab>
                <Tabs.Tab key="TabTen">Tab 10</Tabs.Tab>
                <Tabs.Tab key="TabEleven">Tab 11</Tabs.Tab>
            </Tabs.Container>
            <hr style={ { marginTop: '2rem', marginBottom: '1rem' } }/>
            <Tabs.Container width="4" selected={ 3 } indicatorColor="rgb(0, 0, 0)">
                <Tabs.Tab key="TabOne" disabled>Tab 1</Tabs.Tab>
                <Tabs.Tab key="TabTwo" disabled>Tab 2 with additional text</Tabs.Tab>
                <Tabs.Tab key="TabThree">Tab 3</Tabs.Tab>
                <Tabs.Tab key="TabFour">Tab 4 that's also slightly long</Tabs.Tab>
                <Tabs.Tab key="TabFive">Tab 5</Tabs.Tab>
                <Tabs.Tab key="TabSix" disabled>Tab 6</Tabs.Tab>
                <Tabs.Tab key="TabSeven" disabled>Tab 7</Tabs.Tab>
            </Tabs.Container>
        </Container>
    ]);
