# Pokedex

This is a React Native project that utilizes styled components and Storybook. It is a job interview exercise.

## Table of Contents

- [Pokedex](#pokedex)
  - [Table of Contents](#table-of-contents)
  - [How to Run in Different Environments](#how-to-run-in-different-environments)
  - [Unfinished Tasks](#unfinished-tasks)
  - [Improvements and Suggestions](#improvements-and-suggestions)

## How to Run in Different Environments

This project can be run using both Yarn package manager and npm. The `package.json` file contains the following scripts for running the project:

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web",
  "check-types": "tsc --noEmit --pretty",
  "generate": "graphql-codegen --config codegen.ts",
  "generate:watch": "bun run generate --watch",
  "storybook-generate": "sb-rn-get-stories",
  "storybook-watch": "sb-rn-watcher",
  "storybook": "sb-rn-get-stories && cross-env STORYBOOK_ENABLED='true' expo start",
  "storybook:ios": "sb-rn-get-stories && cross-env STORYBOOK_ENABLED='true' expo start --ios",
  "storybook:android": "sb-rn-get-stories && cross-env STORYBOOK_ENABLED='true' expo start --android"
}
```

To run the project, you can use the following commands:

- `npm start` or `yarn start`: Starts the Expo development server.
- `npm run android` or `yarn android`: Runs the app on an Android device or emulator.
- `npm run ios` or `yarn ios`: Runs the app on an iOS simulator.
- `npm run web` or `yarn web`: Runs the app in a web browser.

For running Storybook, you can use the following commands:

- `npm run storybook` or `yarn storybook`: Starts Storybook and enables it in the app.
- `npm run storybook:ios` or `yarn storybook:ios`: Starts Storybook and enables it in the iOS app.
- `npm run storybook:android` or `yarn storybook:android`: Starts Storybook and enables it in the Android app.

To run the app on your phone, you can install the Expo Go app and scan the QR code displayed in the development server.

![expo qr code](https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/images/optimized/rev-406fc4c/litslink.com/wp-content/uploads/2021/05/how-to-run-expo-min.png)

For more information on Expo, React Native, and Storybook, please refer to the following links:

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Storybook](https://storybook.js.org/)

## Unfinished Tasks

Although the project includes certain features, there are some tasks that have not been completed due to time constraints. These tasks include:

1. Schema Validation: Although the project has integrated Zod for validating schemas received from the backend, the validation implementation is not completed.

2. Search Functionality: The search functionality in the app triggers on every change, but it lacks debounce implementation to prevent memory leaks and excessive RAM usage.

3. Search Request Cancellation: The project does not utilize an abort controller to cancel previous search requests when a new search is initiated.

4. Data Storage: The core data is not saved in stores. This decision was made based on two reasons: first, the Apollo caching system was sufficient for the project's requirements, and second, each page had specific data and request handling.

5. Testing: The project lacks testing implementation. Consider adding Husky to enforce testing for other developers before pushing or committing their code.

## Improvements and Suggestions

Based on my assessment of the project, here are some suggestions for improvement:

1. Loading State: Instead of using a loading state per component, consider implementing a centralized loading state management solution for better control and consistency.

2. Error Handling: Enhance error handling by implementing mechanisms to save user data in case of errors, providing softer error pages, and incorporating retry functionality.

3. Loading and Error Handling: Overall, the loading and error handling mechanisms can be improved to provide a better user experience.

4. Search Pagination and Virtual Scrolling: Implementing search pagination and virtual scrolling can significantly enhance the user experience by preventing large amounts of data from being loaded at once.

5. UI Enhancements: Consider implementing UI changes such as splash screens, interactive animations, skeleton loading, icons, and a cohesive design language to improve the overall user experience.

6. Screen Transitions and Effects: Add transitions and effects to screens and components to create a more visually appealing and engaging user interface.

7. Linting: Integrate ESLint with predefined rules to enforce code quality and consistency among developers.

8. Redux Toolkit: While using libraries like Immer or Immutable.js for managing state with Redux could have been an option, the project chose to use Redux Toolkit. Redux Toolkit provides several advantages, including simplified syntax, built-in immutability, and automatic reducer and action creation. These features can significantly reduce boilerplate code and make state management more efficient and developer-friendly.

9. Database for Login and History: Instead of persisting history data, it would have been better to implement a login system and save the history in a database. This approach would provide more security and flexibility in managing user data.

10. Clear Persisted Data: Consider adding a button or option to clear persisted data. This feature would allow users to easily reset or delete their stored data when needed.
