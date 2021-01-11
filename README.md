# Spaced Repetition Capstone

### Live link: https://space-rep-client.vercel.app
- Demo Account Info:
- Username: admin
- Password: pass

### Client repo: https://github.com/zcason/space-repetition-client
### Server repo: https://github.com/zcason/spaced-repetition-api

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.

# Registration page

## User story:

As a prospective user, I can register an account so that I can login and use the application.

## Acceptance criteria:

As a first time user:

- I'm directed to a registration page.
- On that page, I can enter my name, username, and password.
- If all of my information is correct, upon clicking the submit button, I'm taken to the login page.
- If any of my information is incorrect, I'm given an appropriate error message and the option to correct my information.

# Login page

## User story:

As a registered user, I can login to the application so that I can begin learning.

## Acceptance criteria:

On any visit when I'm not logged in:

- I can navigate to the "login" page.

As a registered user on the login page:

- I can navigate back to the registration page.
- I can enter my username and password.
- If my submitted username and password are incorrect, I'm given an appropriate error message so that I can attempt to login again.
- If my submitted username and password are correct, the app "logs me in" and redirects me to my dashboard.

As a logged in user:

- The app displays my name and presents a logout button.
- The application refreshes my auth token so that I can remain logged in while active on the page.

As a logged in user who is starting a new session:

- The application remembers that I'm logged in and doesn't redirect me to the registration page.

# Dashboard page

## User story:

As a logged in user, I'm directed to a dashboard where I can see my progress learning my language.

## Acceptance criteria:

When viewing the dashboard as a logged in user:

- The app gets my language and words progress from the server
- I'm shown my language
- I'm shown the words to learn for the language
- I'm shown my count for correct and incorrect responses for each word
- I'm given a button/link to start learning
- I'm shown the total score for guessing words correctly

# Learning page - 1

## User story:

As a logged in user, I can learn words using spaced repetition.

## Acceptance criteria:

When viewing the learning page as a logged in user:

- The app gets my next word to learn details from the server
- I'm shown the word to learn
- I'm shown my current total score
- I'm shown the number of correct and incorrect guesses for that word
- I'm presented an input to type my answer/guess for the current words translation

# Learning page - 2

## User story:

As a logged in user, I can see feedback on my submitted answers.

## Acceptance criteria:

After submitting an answer on the learning page as a logged in user:

- The app POSTs my answer for this word to the server
- The server will update my appropriate scores in the database
- After submitting, I get feedback whether I was correct or not
- After submitting, I'm told the correct answer
- My total score is updated
- I'm told how many times I was correct and incorrect for the word
- I can see a button to try another word

# Learning page - 3

## User story:

As a logged in user, I can learn another word after receiving feedback from my previous answer

## Acceptance criteria:

When viewing feedback for an answer on the learning page as a logged in user:

- I'm presented with a button that I can click to learn another word
- When clicking on the button I see the next word to learn