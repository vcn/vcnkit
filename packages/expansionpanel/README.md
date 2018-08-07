# VCNKit/ExpansionPanel

`@vcnkit/expansionpanel` provides a Expansion Panel component. This component has a header and an icon indicating the current expanded-state. The given content will only be rendered when the panel is expanded.

## Installation

NPM
```sh
$ npm install --save @vcnkit/expansionpanel
```

Yarn
```
$ yarn add @vcnkit/expansionpanel
```

## Usage

### A simple expansion panel utilizing local state.

The basic Expansion Panel consists of a header and the content that should be displayed when the panel is expanded.

```jsx
import * as ExpansionPanel from '@vcnkit/expansionpanel';

const SomeComponent = () => (
    <ExpansionPanel.Panel>
        <ExpansionPanel.Header>I am an Expansion Panel</ExpansionPanel.Header>
        <ExpansionPanel.Content>
            This will only be visible when the panel is expanded.
        </ExpansionPanel.Content>
    </ExpansionPanel.Panel>
)
```

The above code will render a panel that will toggle the expanded-state when the `ExpansionPanel.Header` is clicked on or gets triggered by a keypress.

#### Setting the default state

The panel is collapsed by default, if you want it to be expanded by default you can simply pass the `expanded`-prop to `ExpansionPanel.Panel`.

```jsx
import * as ExpansionPanel from '@vcnkit/expansionpanel';

const SomeComponent = () => (
    <ExpansionPanel.Panel expanded>
        <ExpansionPanel.Header>I am an Expansion Panel</ExpansionPanel.Header>
        <ExpansionPanel.Content>
            This will only be visible when the panel is expanded.
        </ExpansionPanel.Content>
    </ExpansionPanel.Panel>
)
```

### Controlling the ExpansionPanel from another component or state manager

If you want to control the ExpansionPanel's `expanded` state from another component or a state manager like Redux, you need to provide an `onChange` handler to `ExpansionPanel.Panel` and it will stop using local state. When a user clicks on the `ExpansionPanel.Header` the `onChange` function will be called with the current expanded state. It is up to you to then change the value of the `expanded`-prop.

### Using the provided <ExpansionPanel.Set> to manage panels.

A simple container component is provided to manage a set of expansion panels easily

```jsx
import * as ExpansionPanel from '@vcnkit/expansionpanel';

const SomeComponent = () => (
    <ExpansionPanel.Set initialExpanded="panel-1">
        { (expanded, toggle) => (
            <div>
                <ExpansionPanel.Panel
                    expanded={ expanded === 'panel-1' }
                    onChange={ () => toggle('panel-1') }
                >
                    <ExpansionPanel.Header>Panel 1</ExpansionPanel.Header>
                    <ExpansionPanel.Content>Content 1</ExpansionPanel.Content>
                </ExpansionPanel.Panel>
                <ExpansionPanel.Panel
                    expanded={ expanded === 'panel-2' }
                    onChange={ () => toggle('panel-2') }
                >
                    <ExpansionPanel.Header>Panel 2</ExpansionPanel.Header>
                    <ExpansionPanel.Content>Content 2</ExpansionPanel.Content>
                </ExpansionPanel.Panel>
            </div>
        ) }
    </ExpansionPanel.Set>
);
```

## Using a different component as icon

The `<ExpansionPanel.Header>` component takes an optional `icon`-prop. The provided component will be used in place of the "Expand more"-arrow. In order to react to the current expanded state, you can use `ExpansionPanel.PanelContext` to retrieve it.

```jsx
import * as ExpansionPanel from '@vcnkit/expansionpanel';

// Create a component to act as an icon.
const SomeOtherIcon = () => (
    <ExpansionPanel.PanelContext>
        { ({ expanded }) => expaned ? <p>Expanded</p> : <p>Not expanded</p> }
    </ExpansionPanel.PanelContext>
);

// Inject our own icon into <ExpansionPanel.Header>
const SomeComponent = () => (
    <ExpansionPanel.Panel expanded>
        <ExpansionPanel.Header icon={ <SomeOtherIcon /> }>I am an Expansion Panel</ExpansionPanel.Header>
        <ExpansionPanel.Content>
            This will only be visible when the panel is expanded.
        </ExpansionPanel.Content>
    </ExpansionPanel.Panel>    
);
```