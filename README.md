# React Native useEffect Hook Issue with State Dependency

This repository demonstrates a common issue encountered when using the `useEffect` hook in React Native with a state dependency. The problem arises when the callback function within `useEffect` does not re-execute when the state value it depends on changes, leading to unexpected behavior (stale closures).

The `useEffectBug.js` file shows how this issue occurs.  The `useEffectBugSolution.js` file provides a solution.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install`.
4. Run the app using your preferred React Native method.
5. Observe the console logs and the app's behavior to understand the issue and the solution.

## Solution

The solution is to use the state value directly within the `useEffect`'s dependency array, ensuring the effect runs whenever the state changes.