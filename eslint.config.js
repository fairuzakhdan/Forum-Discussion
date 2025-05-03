import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';
import pluginCypress from 'eslint-plugin-cypress'

export default defineConfig([
  daStyle,
  pluginCypress.configs.recommended,
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
