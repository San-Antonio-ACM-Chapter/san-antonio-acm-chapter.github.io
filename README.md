# San Antonio ACM Chapter Website

## Description

This is the repository for the San Antonio ACM Chapter website. The website is built using React and is hosted on GitHub Pages. The website is available at [san-antonio-acm-chapter.github.io](https://san-antonio-acm-chapter.github.io/).

## Table of Contents

- [Description](#description)
- [Purpose](#purpose)
- [Technologies Used](#technologies-used)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [Deployment](#deployment)
  - [`npm run predeploy`](#npm-run-predeploy)
  - [`npm run deploy`](#npm-run-deploy)

## Purpose

The purpose of this website is to provide information about the San Antonio ACM Chapter. The website will include information about the chapter, upcoming events, and resources for members.

## Technologies Used

- React
- GitHub Pages
- Node.js
- npm

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deployment

### `npm run predeploy`

literally just an alias that runs `npm run build`

### `npm run deploy`

Deploys the app to github pages. This command will run `npm run predeploy` and then deploy the app to github pages. The app will be available at [san-antonio-acm-chapter.github.io](https://san-antonio-acm-chapter.github.io/). The `homepage` field in `package.json` must be set to `https://san-antonio-acm-chapter.github.io/` for this to work.
