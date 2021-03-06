# VCNKit/Progress

`@vcnkit/progress` provides a linear and a circular progress indicator. The indicators can be used in either determinate or indeterminate mode.

## Installation

NPM
```sh
$ npm install --save @vcnkit/progress
```

Yarn
```
$ yarn add @vcnkit/progress
```

## Usage

### Circular progress indicator

The circular indicator can be used in either determinate mode by passing `percentage`-prop. This prop accepts any numeric between 0 and 100.

```jsx
import { Circular } from '@vcnkit/progress';

const SomeComponent = () => (
    <Circular percentage={ 0 } />
);
```

Or, it can be used in indeterminate mode by omitting the `percentage`-prop.

```jsx
import { Circular } from '@vcnkit/progress';

const SomeComponent = () => (
    <Circular />
);
```

#### Changing the size of the loader

The circular indicator accepts a `width`-prop.

```jsx
import { Circular } from '@vcnkit/progress';

const SomeComponent = () => (
    <Circular width={ 32 } />
);
```

### Linear progress indicator

The linear indicator accepts the same props as the Circular indicator except `width`, but will simply show a horizontal bar with a progress indicator.