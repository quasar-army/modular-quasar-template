# ModularQuasarTemplate (modular-quasar-starter-template)

An opinionated starter template for Quasar that uses a modular approach

## Install the dependencies
```bash
yarn
```


### Start the app in development mode
Note that we don't use the quasar cli! We get into the habit of using `yarn dev` to make it easier to change the dev command if needed.
```bash
yarn dev
```


### Lint the files
```bash
yarn lint
```


### Build the app for production
```bash
yarn build
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
