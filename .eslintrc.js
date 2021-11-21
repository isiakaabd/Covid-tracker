module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // 'plugin:import/recommended',
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-unused-vars": ["warn", { args: "none", argsIgnorePattern: "req|res|next|val" }],
    "prettier/prettier": ["warn"],
    // "import/no-unresolved": [2, { caseSensitive: false }],
 },
};
