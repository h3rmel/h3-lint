module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "jsx-a11y",
    "react-refresh",
    "filename-rules",
    "jsdoc",
    "eslint-plugin-tsdoc",
    "no-secrets",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb-typescript",
    "plugin:@typescript-eslint/strict",
    "airbnb/hooks",
    "plugin:jsx-a11y/recommended",
    "plugin:jsdoc/recommended-typescript",
  ],
  // Ignore files in root
  ignorePatterns: ["/*.*"],
  rules: {
    /**
     * Default rules
     * @see https://eslint.org/docs/latest/rules/
     */
    // Disable console.log to encourage more explicit logging
    "no-console": [
      "warn",
      {
        allow: [
          "warn",
          "error",
          "info",
          "dir",
          "table",
          "assert",
          "count",
          "time",
          "timeLog",
          "trace",
          "groupCollapsed",
          "groupEnd",
        ],
      },
    ],
    "no-alert": "error",
    "no-template-curly-in-string": "error",
    "prefer-template": "warn",
    "no-implicit-coercion": "warn",
    "require-await": "warn",
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
    "no-restricted-imports": "off",
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "padding-line-between-statements": "off",
    /**
     * TypeScript rules
     * @see https://typescript-eslint.io/rules/
     */
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "never" },
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": false,
        minimumDescriptionLength: 3,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        enforceForJSX: true,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      { ignoreVoid: true, ignoreIIFE: true },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: [
          "function",
          "interface",
          "type",
          "try",
          "throw",
          "case",
          "default",
        ],
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      /**
       * If you want to edit this config, check out it's documentation
       * @see https://typescript-eslint.io/rules/naming-convention/
       */
      {
        // Ignore convention for 3rd party libraries
        selector: "import",
        format: null,
      },
      {
        // Matches everything
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        // const / let / var variables name.
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        // Any function parameters
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        // Matches any named function, declarated or expressed
        selector: "function",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        // Matches class, enum, interface, typeAlias and typeParameter
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/comma-dangle": "off",
    /**
     * React rules
     * @see https://github.com/jsx-eslint/eslint-plugin-react
     */
    "react/prefer-stateless-function": "error",
    "react/button-has-type": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-no-script-url": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/jsx-fragments": "error",
    "react/destructuring-assignment": [
      "error",
      "always",
      { destructureInSignature: "always" },
    ],
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "react/jsx-max-depth": ["error", { max: 5 }],
    "react/function-component-definition": [
      "warn",
      { namedComponents: "function-declaration" },
    ],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/no-typos": "warn",
    "react/display-name": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    /**
     * React Refresh rules
     * @see https://github.com/ArnaudBarre/eslint-plugin-react-refresh
     */
    "react-refresh/only-export-components": "warn",
    /**
     * JSDoc and TSDoc rules
     * @see https://github.com/gajus/eslint-plugin-jsdoc && https://github.com/microsoft/tsdoc
     */
    "jsdoc/require-throws": "error",
    "jsdoc/check-indentation": "warn",
    "jsdoc/no-blank-blocks": "warn",
    "jsdoc/require-asterisk-prefix": "warn",
    "jsdoc/require-description": "warn",
    "jsdoc/sort-tags": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/tag-lines": ["warn", "never", { startLines: 1 }],
    "jsdoc/require-param": ["warn", { checkDestructuredRoots: false }],
    "jsdoc/require-jsdoc": [
      "warn",
      {
        publicOnly: true,
        require: {
          FunctionDeclaration: true,
          FunctionExpression: true,
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          MethodDefinition: true,
        },
        enableFixer: true,
      },
    ],
    "jsdoc/check-tag-names": [
      "warn",
      { definedTags: ["remarks", "privateRemarks"] },
    ],
    // TSDoc checks this syntax
    "jsdoc/require-hyphen-before-param-description": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/require-returns-check": "off",
    "jsdoc/check-param-names": ["error", { checkDestructured: false }],
    "tsdoc/syntax": "warn",
    /**
     * Filename rules
     * @see https://github.com/dolsem/eslint-plugin-filename-rules
     */
    "filename-rules/match": [2, { ".ts": "kebab-case", ".tsx": "kebab-case" }],
    /**
     * No Secrest rules
     * @see https://github.com/nickdeis/eslint-plugin-no-secrets
     */
    "no-secrets/no-secrets": [
      "error",
      { ignoreContent: "https", tolerance: 4.2 },
    ],
  },
};
