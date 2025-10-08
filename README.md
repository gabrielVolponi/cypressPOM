# Cypress Automation - Sauce Demo

Automated E2E tests for [Sauce Demo](https://www.saucedemo.com) using Cypress with Page Object Model.

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
