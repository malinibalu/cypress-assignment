Manual Test Case Documentation:
--------------------------------

https://docs.google.com/spreadsheets/d/1-eOuY1AWVKhOYboNdUuFxPAVRSWkh5o1JitOxuN_Biw/edit?gid=0#gid=0

# Cypress Automation:

## Overview
This repository contains Cypress tests to automate and validate the functionality of ['https://petstore.octoperf.com/actions/Catalog.action']. Follow the instructions below to set up and run the tests on your local machine.

## Prerequisites
Ensure the following tools are installed on your system:
- **Node.js** (version 14.x or higher recommended)
- **npm** (comes with Node.js) 
- **Git** for cloning the repository

## Setup Instructions

### 1. Clone the Repository
Clone the repository from GitHub to your local machine.
```bash
git clone https://github.com/malinibalu/cypress-assignment.git
```

### 2. Navigate to the Project Directory
Move into the cloned project folder:
```bash
cd cypres-assignment
```

### 3. Initialize npm and Install Cypress
1. **Initialize npm**: Create a `package.json` file for your project.
   ```bash
   npm init -y
   ```
   The `-y` flag automatically accepts the default settings, but you can run `npm init` without `-y` to customize the configuration files.

2. **Install Cypress**: Install Cypress as dependency.
   ```bash
   npm install cypress --save-dev
   ```
## Running the Tests

### Open Cypress Test Runner 
To open the Cypress test runner in an interactive mode, which allows you to select and run individual test cases:
```bash
npx cypress open
```
This command will open the Cypress UI where you can choose and run specific tests.
## Running Test Cases with Cypress

1. Click on the **Scaffold File** in the project directory.
2. Open the browser when prompted by Cypress.
3. Select **"Okay, I got it"** to continue.
4. Choose the test file you want to run from the list.
5. Click on the selected file, and Cypress will automatically execute the test case.


