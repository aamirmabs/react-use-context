# React `useContext` - A Detailed Introduction

The primary usage of `useContext` is to pass props from a parent component to any child component in the component hierarchy directly bypassing all other components in the hierarchy.

For example, if there is a hierarchy of components in the order A, B, C, D and E where A is parent of B, B is parent of C etc., and we want to pass a prop from A to E - the prop will need to be passed through each of the child components till it is recieved at E.

We can visualize this as:

```text
Component A
  | - passes prop-X
  | - X is meant for Component E
Component B
  | - pass prop-X to C
Component C
  | - pass prop-X to D
Component D
  | - pass prop-X to E
Component E (finally receives the prop)
```

This is commonly knows as **prop-drilling** where a prop is passed down multiple levels of hierarchy till it reaches the final destination. Often, the components that are passing the prop have no interest in the value and are just passing it through till it reaches its destination. As the application size grows, this practice leads to a lot of cluttered code.

This approach is illustrated in folder [sample-code/01-passing-prop-by-prop-drilling](./sample-code/01-passing-prop-by-prop-drilling/).

## The React `useContext` Alternative

The React Context API provides a solution to this. Instead of passing down the prop, the parent component _provides a context_ which any child component _can consume_ on demand.

The illustration for this approach would look like:

```text
Component A - Provides a Context to pass the prop value
  |
Component B
  |
Component C
  |
Component D
  |
Component E - Consumes the Context and receives the value
```

This approach ensures that the values are passed directly from the component that wants to provide the value to the component that needs to consume that value - bypassing all other components in the hierarchy.

This approach is illustrated in folder [sample-code/02-passing-props-with-useContext](./sample-code/02-passing-props-with-useContext/).

## How to use Context in React

The typical scenario for using Context would involve _providing the context_ in the parent component and _consuming the context_ in the child component.

### Providing Context in Parent Component

First, we have to create the Context which will give access to a Provider and Consumer object. Ideally we will create the Context in a separate file, export it as a default value and then import it in the component where we will be using it. For the sake of simplicity I have created the Context in the same file as the component in this example.

```javascript
// ./src/ContextComponentA.js

import React from "react";
import ContextComponentB from "./ContextComponentB";

// create and export the context ContextFromA
// default value provided is null - can be any other value
export const ContextFromA = React.createContext(null);

const ContextComponentA = () => (
  <ContextFromA.Provider value="E is for Elixir!">
    <div>
      <ContextComponentB />
    </div>
  </ContextFromA.Provider>
);

export default ContextComponentA;
```

Here is the breakdown of the things that are happening in this component.

- A context object named `ContextFromA` is created and exported with `export const ContextFromA = React.createContext(null);`. The value that is exported will be imported in the component that needs to consume the context value.
- The component is wrapped in a `Provider` JSX tag which can specify the value to be passed. This done by `<ContextFromA.Provider value="E is for Elixir!">` where `ContextFromA` is the name of the context object and `value` contains the value to be passed. This value can be any valid value - variable/const value, state variable, value fetched from a server etc.
- Note that the children components, `<ContextComponentB />` in this case, are not involved in passing the prop values. They are free from the clutter and the prop is directly passed to the child component by creating the Context Provider in the parent and using it with the Context Consumer in the child.

### Consuming Context in Child Component

The Context needs to be imported and then used. Similar to the Provider, the contents of the components are wrapped in a `Consumer` JSX tag and the context value recieved is used within it.

```javascript
// ./src/ContextComponentE.js

import React from "react";
// importing context that was exported from the provider component
import { ContextFromA } from "./ContextComponentA";

const ContextComponentE = () => {
  return (
    <ContextFromA.Consumer>
      {(value) => (
        <div className="container bg-E">
          <h1>ComponentE</h1>
          <p>ComponentE consumes the Context - {value}</p>
        </div>
      )}
    </ContextFromA.Consumer>
  );
};

export default ContextComponentE;
```

Here is the breakdown of what is happening in this component.

- `ContextFromA` Component Object was exported in the parent component. It is now imported in this component with `import { ContextFromA } from "./ContextComponentA";`
- The `Consumer` from the context object is used to wrap the contents of the component. `<ContextFromA.Consumer>` will contain the component contents.
- The prop is recieved as a render prop and the value is put in a function and used accordingly. `{(value) => ( // use {value} inside...)}`
