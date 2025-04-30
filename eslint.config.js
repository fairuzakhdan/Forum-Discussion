import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  daStyle,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        alert: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
      },
    },
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
]);
