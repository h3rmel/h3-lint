# H3 Lint

![H3 Lint](./assets/h3-lint-banner.png)

---

A Complete guide for setting up your project with ESLint and Prettier using the following frameworks:

- React
- Next.js
- Vue

## Setup

### Prettier

The setup for Prettier is pretty much the same across all the frameworks.

1. Install the packages

```bash
pnpm add --save-dev prettier prettier-plugin-tailwindcss @ianvs/prettier-plugin-sort-imports
```

2. Create the `.prettierrc.js` file in the root of your project

```bash
touch .prettierrc.js
```

3. In the `.prettierrc.js` file, copy and paste this config:

```js
/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  endOfLine: "auto",
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    // Create your config here
  ],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
};
```

The `importOrder` controls the order of the imports in your code, you can create your own following the documentation of the plugin:

[prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)

Here are my configs if you want to just copy and go:

- [React](./config/prettier/react.js)
- [Next.js](./config/prettier/next.js)
- [Vue](./config/prettier/vue.js)

### ESLint

The setup for ESLint is pretty much the same for React and Next.js. For Vue, I use the default ESLint configuration provided by Vite.

So, let's get started:

1. Install the packages

```bash
pnpm add -D @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-typescript \
  eslint-plugin-filename-rules \
  eslint-plugin-jsdoc \
  eslint-plugin-jsx-a11y \
  eslint-plugin-no-secrets \
  eslint-plugin-tsdoc
```

2. Create the `.eslintrc.js` file in the root of your project (if doesn't already exists):

```bash
touch .eslintrc.js
```

3. In the `.eslintrc.js` file, copy and paste the following config:

- [ESlint Config file](./config/eslint/config.js)

**Observation:** If you're using this config in a Next.js project, don't forget to add the `'next/core-web-vitals'` and `'next/typescript'` plugins to the `extends`.

### Migrating to ESLint v9

To migrate this config to ESLint version 9, following this steps:

1. With all the config already settled, run the following command:

```bash
npx @eslint/migrate-config .eslintrc.js
```

You're may see this message:

```bash
Migrating .eslintrc.json

Wrote new config to ./eslint.config.mjs

You will need to install the following packages to use the new config:
- globals
- @eslint/js
- @eslint/eslintrc

You can install them using the following command:

npm install globals @eslint/js @eslint/eslintrc -D
```

If yes, install the dependecies as mentioned in the message:

```bash
pnpm add globals @eslint/js @eslint/eslintrc -D
```

And finally, delete the old configuration file:

```bash
rm .eslintrc.js
```
