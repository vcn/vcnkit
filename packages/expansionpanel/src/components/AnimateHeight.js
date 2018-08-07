import * as React from 'react';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';
import ResizeObserver from 'resize-observer-polyfill';

class AnimateHeight extends React.Component {
    state = {
        animation: new Animated.Value(0),
    };

    innerNode;
    resizeObserver;

    componentDidMount() {
        this.resizeObserver = new ResizeObserver(() => {
            this.animateHeight();
        });

        if (this.innerNode) {
            this.resizeObserver.observe(this.innerNode);
        }
    }

    componentWillUnmount() {
        this.resizeObserver.disconnect();
    }

    animateHeight = () => {
        if (this.innerNode) {
            Animated.timing(this.state.animation, {
                toValue: this.innerNode.scrollHeight,
                duration: 80,
                easing: Easing.inOut(Easing.quad),
            }).start();
        }
    };

    render() {
        const { children } = this.props;
        const { animation } = this.state;

        return (
            <Animated.div style={{ overflow: 'hidden', height: animation }}>
                <div
                    ref={node => {
                        this.innerNode = node;
                    }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    {children}
                </div>
            </Animated.div>
        );
    }
}

export default AnimateHeight;
