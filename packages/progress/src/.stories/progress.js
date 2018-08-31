import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import ThemeDecorator from '../../../../.storybook/decorators/ThemeDecorator';
import GridDecorator from '../../../../.storybook/decorators/GridDecorator';

import { Circular, Linear } from '../index';

const Container = styled.div`
    width:  75vw;
    margin: 1rem;
`;

class Determinate extends React.Component {
    state = {
        percentage: 0,
    };

    timeout;

    componentDidMount() {
        this.increase();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    increase = () => {
        window.requestAnimationFrame(() => {
            const nextValue = this.state.percentage + 10;
            this.setState({
                percentage: nextValue > 100 ? 0 : nextValue,
            });

            this.timeout = setTimeout(this.increase, 100);
        });
    };

    render() {
        const { children } = this.props;
        const { percentage } = this.state;

        return children(percentage);
    }
}

storiesOf('Progress', module)
    .addDecorator(ThemeDecorator)
    .addDecorator(GridDecorator)
    .add('Circular', () => [
        <Circular width={ 16 }/>,
        <Circular color="black" width={ 32 }/>,
        <Circular color="green" width={ 64 } />,
        <Determinate>
            { (percentage) => (
                <Circular
                    determinate
                    percentage={ percentage }
                />
            ) }
        </Determinate>
    ])
    .add('Linear', () => [
        <Container>
            <Linear />
        </Container>,
        <Container>
            <Linear color="green" />
        </Container>,
        <Determinate>
            { (percentage) => (
                <Container>
                    <Linear
                        determinate
                        percentage={ percentage }
                    />
                </Container>
            ) }
        </Determinate>
    ]);
