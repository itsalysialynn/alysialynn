module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "eslint-config-prettier/@typescript-eslint",
  ],
  parser: ["@typescript-eslint/parser"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    project: "./tsconfig.json",
    extraFileExtensions: [".json"],
  },
  plugins: ["@typescript-eslint", "react", "jsx-a11y"],
  rules: {
    "@typescript-eslint/rule-name": "error",
  },
};
