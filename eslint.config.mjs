import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const prettierRules = {
  'prettier/prettier': [
    'error',
    {
      singleQuote: true, // Use single quotes
      semi: false, // Remove semicolons
      tabWidth: 2, // Use 2 spaces for indentation
    },
  ],
};

export default [
  // Base configuration for JavaScript
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...js.globals,
        ...tsPlugin.configs.recommended.globals,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...prettierRules,
    },
  },

  // Prettier configuration to disable conflicting rules
  {
    languageOptions: {
      globals: {
        ...prettierConfig.globals,
      },
    },
    rules: {
      ...prettierRules,
    },
  },
];
