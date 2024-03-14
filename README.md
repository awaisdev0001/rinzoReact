# Rinzo web-app

![Build](https://github.com/RinzoIO/web-app/actions/workflows/build.yaml/badge.svg?branch=dev)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Building and running

All commands must be run in the project directory, unless otherwise specified.

## Using locally installed node and yarn

### Prerequisites

- Install node: https://nodejs.org/en/download/
- Install yarn: `npm install --global yarn`

### Install packages

```shell
yarn install
```

### You can run the project by either through yarn or npm, depending on which package manager you prefer. The command will be written like yarn || npm start:env where env can be dev, staging or prod.

### Run in development mode

```shell
yarn start || yarn start:dev || npm start || npm start:dev
```

### Run in staging mode

```shell
yarn start:staging || npm start:staging
```

### Run in production mode

```shell
yarn start:prod || npm start:prod
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Run tests

Launch the test runner in the interactive watch mode:

```shell
yarn test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build for production

Build the app for production to the `build` folder:

```shell
yarn build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is now ready to be deployed.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Update Yarn

Update Yarn to the latest stable version:

```shell
yarn set version stable
```

## Using Docker (on Linux)

### Prerequisites

- Install Docker: https://docs.docker.com/get-docker/
- Install `make`

### Install node modules

```shell
make install
```

### Run in development mode

```shell
make start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Run tests

Launch the test runner in the interactive watch mode:

```shell
make test
```

### Build for production

Build the app for production to the `build` folder:

```shell
make build
```

### Update Yarn

Update Yarn to the latest stable version:

```shell
make update-yarn
```
