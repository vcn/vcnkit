# VCNKit/Tabs

`@vcnkit/tabs` is intended to be a lightweight React material tabs bar.

## Installation

NPM
```sh
$ npm install --save @vcnkit/tabs
```

Yarn
```
$ yarn add @vcnkit/tabs
```

## Usage
The tabs container can be used to simulate an easy to implement material tabs bar.

The bar accepts the 'width' and 'indicatorColor' prop, which if undefined tries to take all the available width of the parent.

```jsx
import * as Tabs from '@vcnkit/tabs';

const SomeComponent = () => (
    <Tabs.Container width="4" indicatorColor="#5282B5">
        <Tabs.Tab title="SomeTitle" />
    </Tabs.Container>
);
```

The Tab-component accepts two props; 'title' and 'isSelected'. These are pretty self-explanatory.

```jsx
import * as Tabs from '@vcnkit/tabs';

const SomeComponent = () => (
    <Tabs.Container width="4" indicatorColor="rgba(255, 30, 30, 0.75)">
        <Tabs.Tab title="SomeTitle 1" />
        <Tabs.Tab title="SomeTitle 2" isSelected />
        <Tabs.Tab title="SomeTitle 3" />
    </Tabs.Container>
);
```

In the above case the second tab will be selected. By default the first tab is selected, if there is no tab with the isSelected prop.
