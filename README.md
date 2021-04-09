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
