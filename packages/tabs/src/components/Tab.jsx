import * as React from 'react';
import * as Tabs from './Container';
import TabContainer from './TabContainer';

const Tab = ({ title, ...props }) => (
    <React.Fragment>
        <Tabs.Consumer>
            {
                ({ ...context }) => (
                    <TabContainer
                        title={ title }
                        { ...props }
                        { ...context }
                    />
                )
            }
        </Tabs.Consumer>
    </React.Fragment>
);

export default Tab;
