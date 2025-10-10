# Cypress Automation - Sauce Demo

Automated E2E tests for [Sauce Demo](https://www.saucedemo.com) using Cypress with Page Object Model (POM)
## 🧩 Project Structure & Good Practices

This project follows the Page Object Model (POM) pattern, organizing selectors and actions in separate files for maintainability and scalability.

**Best Practices Used:**
- DRY (Don't Repeat Yourself): Avoids code duplication by reusing components and functions.
- KISS (Keep It Simple, Stupid): Keeps code and tests simple and readable.
- YAGNI (You Aren't Gonna Need It): Only implements what is necessary for the current requirements.

## 📸 Screenshots on Failure

All test methods automatically capture screenshots on failure, making debugging easier and improving visibility of errors in CI/CD pipelines.

## ⚙️ CI/CD Pipeline (GitHub Actions)

A pipeline is configured in `.github/workflows/cypress.yml` to run all Cypress test cases automatically whenever a Pull Request is created targeting the `master` branch. The pipeline installs dependencies and runs all tests, blocking merges until tests pass.

Example workflow:

```yaml
name: Cypress Tests

on:
	pull_request:
		branches:
			- master

jobs:
	cypress-run:
		runs-on: ubuntu-latest

		steps:
			- name: Checkout code
				uses: actions/checkout@v4

			- name: Setup Node.js
				uses: actions/setup-node@v4
				with:
					node-version: '20.11.1'

			- name: Install dependencies
				run: npm install

			- name: Run Cypress tests
				run: npx cypress run
```

## 🎯 Scope

**Target Application:** Sauce Demo (Swag Labs)

**Why Sauce Demo?**
- Stable test environment with predictable behavior
- Multiple user types for testing different scenarios
- Covers complete e-commerce flow (login → browse → cart → checkout)
- Good selector attributes (data-test) for stable automation

**Test Coverage:**
- Authentication (login/logout)
- Shopping cart operations


## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

```bash
git clone https://github.com/gabrielVolponi/cypressPOM)

npm install
```

### Run the Project

```bash

npx cypress run   - runs all tests in headless mode
npx cypress run --spec specName  - runs a test suite in headless mode
npx cypress open  - runs all tests in UI mode

```
