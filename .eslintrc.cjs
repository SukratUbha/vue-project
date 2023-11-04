/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
    'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability 
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error', 
    "vue/html-indent": 'off'
  },
  "parser": "vue-eslint-parser",
  "parserOptions": { 
    "parser": "@typescript-eslint/parser" 
  }
}
