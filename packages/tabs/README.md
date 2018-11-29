# VCNKit/Tabs

`@vcnkit/tabs` is intended to be a lightweight React material tabs bar.

## Installation

NPM
```sh
$ npm install --save @vcnkit/tabs
```

Yarn
```sh
$ yarn add @vcnkit/tabs
```

## Usage
The tabs container can be used to simulate an easy to implement material tabs bar.

The container accepts the following props:

| Prop           | Description                                                                                       |
|----------------|---------------------------------------------------------------------------------------------------|
| width          | If undefined tries to take all the available width of the parent.                                 |
| indicatorColor | The color of the tab indicator.                                                                   |
| onSelect       | Function with the tab's key parameter that gets called when the selection changes.                |
| selected       | The key of the tab to select. By default the first tab is selected, if there is no selected prop. |

```jsx
import * as Tabs from '@vcnkit/tabs';

const SomeComponent = () => (
    <Tabs.Container width="4" indicatorColor="#5282B5">
        <Tabs.Tab key="tab">SomeTitle</Tabs.Tab>
    </Tabs.Container>
);
```

The Tab-component accepts one prop; 'key'. It's pretty self-explanatory.

```jsx
import * as Tabs from '@vcnkit/tabs';

const SomeComponent = () => (
    <Tabs.Container width="4" indicatorColor="rgba(255, 30, 30, 0.75)" selected="tab2">
        <Tabs.Tab key="tab1">SomeTitle 1</Tabs.Tab>
        <Tabs.Tab key="tab2">SomeTitle 2</Tabs.Tab>
        <Tabs.Tab key="tab3">SomeTitle 3</Tabs.Tab>
    </Tabs.Container>
);
```