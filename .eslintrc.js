module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended", // Ensure you use Vue 3 recommended settings
  ],
  rules: {
    // Add any TypeScript or Vue-specific rules here
  },
};
