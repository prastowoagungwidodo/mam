🚀 MAM - Aplikasi Resep Masak (React Native)
==========================================================

## Features

* [Redux](http://redux.js.org/)
* [Redux Persist](https://github.com/rt2zz/redux-persist/)
* [Redux Logger](https://github.com/LogRocket/redux-logger/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) 
* [Jest](https://facebook.github.io/jest/)
* [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Project Structure 
- `/app` - Contains our React Native App codebase
  - `/components` - universal shared components used by others.
  - `/config` - Universal styles,images,metrics etc..
  - `/features` - Config files
    - `login`- Each folder will be a feature like this.
      - `reducers` - Reducer associated with this feature [Mostly one, can be multiple]
      - `sagas` - Sagas related with this particular feature [can have single or muliple sagas associated]
      - `selectors` - selectors associated with feature
      - `components` - Components associated with this feature.
      - `containers` - Containers associated with this feature [**Container - Component Structure**]
  - `/utils` - lib helper files
  - `/navigation` - All naviagtion related studd including helpers functions and navigation stack
    - `NavigationHelpers.js` -  Use this class instead of depending on props.naviagtion
    - `NavigationService.js` - Service class for naviagtion
    - `NavigationStack.js` - Stack to define naviagtion. you can split things further if needed
  - `/store` - Includes everything you need to set up store. 
    - `reducers` - Combines all feature based reducers
    - `index.js` - Set ups store and export things
 

## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)
