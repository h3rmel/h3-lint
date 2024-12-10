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
pnpm install --save-dev prettier prettier-plugin-tailwindcss @ianvs/prettier-plugin-sort-imports
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

#### React

```js
importOrder: [
    '',
    '^react$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/contexts(/.*)$',
    '',
    '^@/components(/.*)$',
    '',
    '^@/lib(/.*)$',
    '',
    '^@/assets(/.*)$',
    '',
    '^@/(.*)$',
    '',
    '.css$',
    '',
    '^[.]',
  ],
```

#### Next.js

```js
importOrder: [
    '',
    '^react$',
    '',
    '^next(.*)$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/contexts(/.*)$',
    '',
    '^@/components(/.*)$',
    '',
    '^@/lib(/.*)$',
    '',
    '^@/assets(/.*)$',
    '',
    '^@/(.*)$',
    '',
    '.css$',
    '',
    '^[.]',
  ],
```

#### Vue

```js
importOrder: [
    '',
    '^vue(.*)$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/views(/.*)$',
    '',
    '^@/components(/.*)$',
    '',
    '^@/lib(/.*)$',
    '',
    '^@/assets(/.*)$',
    '',
    '^@/(.*)$',
    '',
    '.css$',
    '',
    '^[.]',
  ],
```

### ESLint