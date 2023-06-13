# Designing Effective Tests with React Testing Library - Exercises

The exercise repository used in the ["Designing Effective Tests with React Testing Library"](https://codingitwrong.com/workshops/rtl-summit) workshop at React Summit 2023.

The `main` branch is the starting state of the exercises. Solutions are available on the `solution` branch.

## Requirements

- [Node](https://nodejs.org)
- [Yarn 1.x](https://classic.yarnpkg.com/lang/en/)

## Installation

Clone the repo locally:

```bash
git clone https://github.com/CodingItWrong/rtl-exercises.git
```

Install the dependencies:

```bash
$ cd rtl-exercises
$ yarn install
```

Get an API key:

- Go to <https://api.outsidein.dev> and click the "Create API Key" button. A personal API key will be created for you and shown to you.
- Copy the API key. Open the file `src/api.js` and replace the value of the `API_KEY` variable with the API key.

## Trying It Out

Do the following to make sure your local installation is working:

- Run `yarn test`. You should see output like the following, including "Tests: 1 todo, 1 total":

```text
 PASS  src/MovieRow.spec.js
  MovieRow
    ✎ todo EXERCISE 1

Test Suites: 1 passed, 1 total
Tests:       1 todo, 1 total
Snapshots:   0 total
Time:        0.169 s
Ran all test suites.

Watch Usage: Press w to show more.
```

- Run `yarn start`. The app should automatically open in your web browser.
- Once the app is launched, make sure you can see the example movies "Vertigo" and "The Sound of Music" listed.
- Type in a movie title and click Save. Confirm the movie is added to the list, with a yellow icon appearing to the right of it

If you reached this point and everything is working, congratulations: you are ready for the workshop!

## License

MIT
