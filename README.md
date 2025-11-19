# E2E Test Automation Project with WebdriverIO

This README provides the setup instructions, project structure, commands, and best practices for an End-to-End (E2E) test automation project using **WebdriverIO**.

## 📌 Overview

This project uses **WebdriverIO (v8+)**, **TypeScript**, and **Allure Reports** to automate E2E tests for web applications.

## 🚀 Technologies Used

* **Node.js**
* **WebdriverIO**
* **TypeScript**
* **Allure Reporter**
* **Mocha** or **Jasmine** (depending on your setup)

---

## 📂 Project Structure

```
├── test
│   ├── pageobjects
│   │   ├── page.ts
│   │   └── example.page.ts
│   ├── specs
│   │   └── example.e2e.ts
├── wdio.conf.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Installation

1. Install dependencies:

```
npm install
```

2. Install WebdriverIO CLI (optional if already installed):

```
npx wdio config
```

---

## ▶️ Running Tests

Run all tests:

```
npx wdio
```

Run a specific test file:

```
npx wdio run wdio.conf.ts --spec test/specs/example.e2e.ts
```

Run a test suite (if configured):

```
npx wdio --suite smoke
```

---

## 📊 Generating Allure Reports

Generate report after test execution:

```
npx allure generate ./allure-results --clean
```

Open the report:

```
npx allure open
```

---

## 🧱 Page Object Model (POM)

This project uses POM to improve code organization.

**Example:**

```ts
class ExamplePage {
  get buttonSubmit() { return $('button[type="submit"]'); }

  async submitForm() {
    await this.buttonSubmit.click();
  }
}
export default new ExamplePage();
```

---

## ✔️ Best Practices

* Name selectors clearly and prefer data-test IDs
* Create reusable functions in page objects
* Keep assertions inside test files, not in page objects
* Always clean the Allure folder before generating reports
* Use TypeScript types for better maintainability

---






