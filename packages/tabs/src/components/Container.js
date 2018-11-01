import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Indicator from './Indicator';
import { noop } from '@vcnkit/essentials';

const { Provider, Consumer } = React.createContext({
    onSelect: noop,
    onActive: noop,
});

const TabsContainer = styled.div`
    display:        inline-flex;
    flex-direction: row;
    position:       relative;
    overflow:       hidden;
    max-width: ${ props => props.width ? `${props.width * 8.625}rem` : '100%' };
    transition:     left 180ms;
`;

const Bar = styled.div`
    display: inline-flex;
    width:   fit-content;
`;

const ChildContainer = styled.div`
    display: inline-flex;
    ${ props => props.scrollable && 'padding-left: 2rem;' }
`;

const Arrow = styled.svg`
    transition: 0.2s ease-in-out;
    transform: rotate(${props => (props.direction === 'left' ? 90 : -90)}deg);
    height: 1.5rem;
    width: 1.5rem;
    fill: hsla(0, 0%, 0%, 0.54);
    margin: 0.5rem;
    cursor: pointer;

    display: block;
`;

const ScrollArrow = ({ ...props }) => (
    <Arrow xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" { ...props }>
        <path d="M33.17 17.17L24 26.34l-9.17-9.17L12 20l12 12 12-12z" />
    </Arrow>
);

const ScrollOffset = styled.div`
    width: 2.5rem;
`;

class Container extends React.Component {
    static propTypes = {
        onSelect: PropTypes.func,
    };

    static defaultProps = {
        onSelect: noop,
    };

    state = {
        indicatorOffset: 0,
        indicatorWidth:  0,
        selected:        0,
        disabled:        [],
    };

    barRef;
    containerRef;

    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        event.preventDefault();
        switch (event.keyCode) {
            case 37:
                this.onTabLeft();
                break;
            case 39:
                this.onTabRight();
                break;
        }
    };

    onSelect = tabIndex => {
        if (this.state.selected !== tabIndex) {
            this.setState({
                selected: tabIndex,
            });
        }
    };

    easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    scrollContainer = offset => {
        const { containerRef, easeInOutQuad } = this;

        let start = containerRef ? containerRef.scrollLeft : 0,
            change = offset - start - 75,
            currentTime = 0,
            increment = 20;

        let animateScroll = () => {
            if (this.containerRef) {
                currentTime += increment;
                this.containerRef.scrollLeft = easeInOutQuad(currentTime, start, change, 180);
            }

            if(currentTime < 180) {
                setTimeout(animateScroll, increment);
            } else {
                this.forceUpdate();
            }
        };

        animateScroll();
    };

    onActive = (tabOffset, tabWidth) => {
        this.scrollContainer(tabOffset);

        this.setState({
            indicatorOffset: tabOffset,
            indicatorWidth:  tabWidth,
        });
    };

    renderChild = (child, index) => {
        const isSelected = !('isSelected' in child.props) && this.state.selected === index;
        const isDisabled = ('disabled' in child.props) && child.props.disabled === true;

        if (isDisabled && this.state.disabled.indexOf(index) === -1) {
            this.setState({
                disabled: [
                    ...this.state.disabled,
                    index
                ],
            });
        }

        return React.cloneElement(child, {
            tabIndex: index,
            isSelected: isSelected === false ? false : isSelected,
            ...child.props
        });
    };

    onTabRight = () => {
        const { selected } = this.state;
        const { children } = this.props;

        if (selected < (children.length - 1)) {
            this.setState({
                selected: selected + 1,
            });

            if (this.state.disabled.indexOf(selected + 1) !== -1) {
                this.onTabRight();
            }
        }
    };

    onTabLeft = () => {
        const { selected } = this.state;

        if (selected > 0) {
            this.setState({
                selected: (selected - 1),
            });

            if (this.state.disabled.indexOf(selected - 1) !== -1) {
                this.onTabLeft();
            }
        }
    };

    renderLeftScroll = () => {
        const { barRef, containerRef } = this;

        if (barRef && containerRef) {
            if (containerRef.scrollLeft > 0) {
                return (
                    <ScrollArrow direction="left" onClick={ () => { this.scrollContainer(containerRef.scrollLeft); } } />
                );
            } else if (containerRef.scrollLeft === 0 && barRef.offsetWidth > containerRef.offsetWidth) {
                return (
                    <ScrollOffset />
                );
            }
        }

        return null;
    };

    renderRightScroll = () => {
        const { barRef, containerRef }  = this;

        if ((barRef && containerRef) &&
            (barRef.offsetWidth > containerRef.offsetWidth) &&
            containerRef.scrollLeft < (containerRef.offsetWidth / 2 + 75)
        ) {
            return (
                <ScrollArrow direction="right" onClick={ () => { this.scrollContainer(containerRef.scrollLeft + 150); } } />
            );
        }

        return null;
    };

    render() {
        const {
            children,
            indicatorColor,
            width,
            ...props,
        } = this.props;

        return (
            <Provider
                value={ {
                    onSelect: this.onSelect,
                    onActive: this.onActive,
                } }
                { ...props }
            >
                <Bar>
                    { this.renderLeftScroll() }

                    <TabsContainer
                        width={ width }
                        innerRef={ ref => this.containerRef = ref }
                    >
                        <ChildContainer
                            innerRef={ ref => this.barRef = ref }
                        >
                            { children.map((child, index) => this.renderChild(child, index)) }
                        </ChildContainer>
                        <Indicator
                            color={ indicatorColor }
                            offset={ this.state.indicatorOffset }
                            width={ this.state.indicatorWidth }
                        />
                    </TabsContainer>

                    { this.renderRightScroll() }
                </Bar>
            </Provider>
        );
    }
}

export default Container;
export {
    Consumer,
};
