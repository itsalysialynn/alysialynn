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
    "plugin:import/typescript"
  ],
  parser: ["@typescript-eslint/parser", "@babel/eslint-parser"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "jsx-a11y"],
  rules: {
    "@typescript-eslint/rule-name": "error"
  },
};
