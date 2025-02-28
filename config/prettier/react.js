/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 90,
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
    "",
    "^react$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/contexts(/.*)$",
    "",
    "^@/components(/.*)$",
    "",
    "^@/lib(/.*)$",
    "",
    "^@/assets(/.*)$",
    "",
    "^@/(.*)$",
    "",
    ".css$",
    "",
    "^[.]",
  ],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
};
