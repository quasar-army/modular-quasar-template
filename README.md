# ModularQuasarTemplate (modular-quasar-starter-template)

An opinionated starter template for Quasar that uses a modular approach

## Install the dependencies
```bash
pnpm
```


### Start the app in development mode
Note that we don't use the quasar cli! We get into the habit of using `pnpm dev` to make it easier to change the dev command if needed.
```bash
pnpm dev
```


### Lint the files
```bash
pnpm lint
```


### Build the app for production
```bash
pnpm build
```

# Generators
It's important that new components, views, and models are created with generators.
This allows us to maintain a gorgeous code structure, and I think you'll find it makes your life as a dev a whole lot easier!

## Modules (usually these are models!)
Modules help us organize our code. You may think of them as little "worlds" that make it more obvious where to put files.

Generate modules for things like new models (e.g. `User` or `Comment`) and concepts that don't make sense as a model (e.g. `Authentication`)
```
hygen new module
```

## Views
We **never** put global state, or api requests in our "lower level" components. Lower level components are things like "Tables", "Cards" and any leaf components in the tree.

Instead, We create **views** that manage the data flow in our application, and render the lower level components.
We can generate a view with the following code:
```
hygen new view
```

## Components
Always use generators when creating new components! Most of our components will be placed inside a corresponding "modules" directory.
For example, a `UserCard` component should go in the `modules/User` directory.
```
hygen new component
```
