# Cypress Assignment

This repository contains the Cypress test setup for running end-to-end tests. The instructions below will guide you through setting up the project, running Cypress tests, and other related tasks.

## Prerequisites

Make sure you have the following installed:
- **Node.js** (with `npm` or `yarn`)
- **Cypress** (for running end-to-end tests)

If you don’t have Cypress installed yet, follow the installation steps below.

## Getting Started

### 1. Clone the Repository

If you haven't already cloned the repository, do so by running:

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Run Tests

To open the Cypress Test Runner, run:

```bash
npx cypress open
```

## Troubleshooting

### Cypress Not Opening
- Ensure that you have the latest version of Cypress installed.
- Try running `npx cypress install` to fix any installation issues.

### Tests Not Running
- Ensure all the necessary selectors are correctly defined.
- Use `cy.wait()` if tests are failing due to race conditions or asynchronous actions.

## Project Structure

The project structure is as follows:

```
cypress/
    e2e/
        addPatient.spec.js
        homePage.spec.js
        login.spec.js
    fixtures/
        example.json
    support/
        commands.js
        e2e.js
cypress.config.js
index.js
package.json
README.md
```

- **cypress/e2e/**: Contains the end-to-end test specifications.
- **cypress.config.js**: Cypress configuration file.

## Writing Tests

To write a new test, create a new file in the `cypress/e2e/` directory with the `.spec.js` extension. For example, to add a new test for a feature, you might create `featureName.spec.js`.

